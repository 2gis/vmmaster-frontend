import json
import time
import logging

import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'vmmaster_frontend.settings'
import django
django.setup()

from dashboard.models import Session
from threading import Thread
from django.core import serializers
from django.utils import timezone


logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)


SLEEP_BEFORE_WATCH = 3
WATCH_STATUSES = ('waiting', 'running', 'preparing')


class WatchSessionsThread(Thread):
    def __init__(self):
        super(WatchSessionsThread, self).__init__()
        self.state = None
        self.ws = None
        self.sent_sessions = []
        self.running = True
        self.daemon = True

    def send_message(self, message_type, data):
        serialized_obj = serializers.serialize('json', data)
        diff = json.dumps(serialized_obj)
        diff = '{}#vmmaster_wsmessage#{}'.format(message_type, diff)

        self.ws.sendMessage(diff)

    def check_new_sessions(self, date):
        db_sessions = self.new_sessions_in_db(date, self.state['query'])

        # watching count sessions in db
        # TODO: check this if you changed django version to 1.8
        if db_sessions.count() < 0:
            return

        session_ids = [session.id for session in db_sessions]

        if self.sent_sessions:
            session_ids = list(set(self.sent_sessions) ^ set(session_ids))

        if session_ids:
            log.info('New sessions for send: {}'.format(db_sessions.count()))
            self.send_message("new", db_sessions.filter(id__in=session_ids))
            self.sent_sessions.extend(session_ids)

    def check_sessions_for_update(self):
        sessions_on_page = self.state['sessions']
        active_session_ids = []

        if len(sessions_on_page) > 0:
            for session in sessions_on_page:
                if session['status'] in WATCH_STATUSES:
                    active_session_ids.append(session['id'])

        # watching active session on page
        if not active_session_ids:
            return

        log.info('Active sessions on page: {}'.format(len(active_session_ids)))
        active_db_sessions_ids = self.active_sessions_ids_in_db(self.state['query'])
        active_session_for_send = list(set(active_session_ids) - set(active_db_sessions_ids))
        log.info('Active sessions in db: {}'.format(len(active_db_sessions_ids)))

        if active_session_for_send:
            log.info('Active sessions for send: {}'.format(active_session_for_send))
            self.send_message("update", Session.objects.filter(id__in=active_session_for_send))
            self.sent_sessions.extend(active_session_for_send)

    def run(self):
        date = timezone.localtime(timezone.now())
        log.info('Start time: {}'.format(date))

        while self.running:
            time.sleep(SLEEP_BEFORE_WATCH)
            self.check_new_sessions(date)
            self.check_sessions_for_update()

    def active_sessions_ids_in_db(self, query):
        if self.ws.user.is_superuser:
            active_db_sessions = Session.objects\
                .filter(status__in=WATCH_STATUSES)\
                .filter(name__icontains=query)
        else:
            active_db_sessions = Session.objects\
                .filter(status__in=WATCH_STATUSES)\
                .filter(user=self.ws.user)\
                .filter(name__icontains=query)

        return [session.id for session in active_db_sessions]

    def new_sessions_in_db(self, date, query):
        if self.ws.user.is_superuser:
            db_sessions = Session.objects\
                .order_by('-created')\
                .filter(created__gte=date)\
                .filter(name__icontains=query)
        else:
            db_sessions = Session.objects\
                .filter(user=self.ws.user)\
                .order_by('-created')\
                .filter(created__gte=date)\
                .filter(name__icontains=query)

        return db_sessions

    def stop(self):
        self.running = False
        self.join()
