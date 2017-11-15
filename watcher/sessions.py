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

        log.info('Got new sessions in db: {}'.format([(s.id, s.status) for s in db_sessions]))
        session_ids = [session.id for session in db_sessions]

        if self.sent_sessions:
            session_ids = list(set(self.sent_sessions) ^ set(session_ids))

        if session_ids:
            log.info('New sessions for send: {}'.format(db_sessions.count()))
            self.send_message("new", db_sessions.filter(id__in=session_ids))
            self.sent_sessions.extend(session_ids)

    def check_sessions_for_update(self):
        current_active_sessions = [s for s in self.state['sessions'] if s['status'] in WATCH_STATUSES]
        if not current_active_sessions:
            return
        log.info('Active sessions on page: {}'.format(len(current_active_sessions)))

        active_db_sessions = {s.id: s.status for s in self.active_sessions_in_db(self.state['query'])}
        log.info('Active sessions in db: {}'.format(active_db_sessions))

        sessions_to_update = []
        for session in current_active_sessions:
            _id = session['id']
            if _id not in active_db_sessions.keys() or session['status'] != active_db_sessions[_id]:
                sessions_to_update.append(_id)

        if sessions_to_update:
            log.info('{} sessions change status. Sending'.format(len(sessions_to_update)))
            self.send_message("update", Session.objects.filter(id__in=sessions_to_update))
            self.sent_sessions.extend(sessions_to_update)

    def run(self):
        date = timezone.localtime(timezone.now())
        log.info('Start time: {}'.format(date))

        while self.running:
            time.sleep(SLEEP_BEFORE_WATCH)
            self.check_new_sessions(date)
            self.check_sessions_for_update()

    def active_sessions_in_db(self, query):
        active_db_sessions = Session.objects.filter(status__in=WATCH_STATUSES)
        if not self.ws.user.is_superuser:
            active_db_sessions = active_db_sessions.filter(user=self.ws.user)

        return active_db_sessions.filter(name__icontains=query)

    def new_sessions_in_db(self, date, query):
        db_sessions = Session.objects

        if not self.ws.user.is_superuser:
            db_sessions = db_sessions.filter(user=self.ws.user)

        return db_sessions.filter(created__gte=date).filter(name__icontains=query)

    def stop(self):
        self.running = False
        self.join()
