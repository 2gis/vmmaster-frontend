import json
import time

import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'vmmaster_frontend.settings'
import django
django.setup()

from dashboard.models import Session
from threading import Thread
from django.core import serializers
from django.utils import timezone


class WatchSessionsThread(Thread):
    def __init__(self):
        super(WatchSessionsThread, self).__init__()
        self.state = None
        self.ws = None
        self.sent_sessions = []
        self.running = True
        self.daemon = True

    def run(self):
        sessions_on_page = self.state['sessions']
        query = self.state['query']
        date = timezone.localtime(timezone.now())
        active_session_ids = []
        running_session_ids = []
        waiting_session_ids = []

        print 'Start time: %s' % date

        if len(sessions_on_page) > 0:
            for session in sessions_on_page:
                if session['status'] == 'waiting':
                    waiting_session_ids.append(session['id'])
                elif session['status'] == 'running':
                    running_session_ids.append(session['id'])

            active_session_ids = waiting_session_ids + running_session_ids

        while self.running:
            time.sleep(3)
            db_sessions = self.new_sessions_in_db(date, query)

            # watching count sessions in db
            # check this if you changed django version to 1.8
            if db_sessions.count() > 0:
                session_ids = [session.id for session in db_sessions]

                if self.sent_sessions:
                    session_ids = list(set(self.sent_sessions) ^ set(session_ids))

                if session_ids:
                    print 'New sessions for send: ', db_sessions.count()

                    serialized_obj = serializers.serialize('json', db_sessions.filter(id__in=session_ids))
                    diff = json.dumps(serialized_obj)
                    diff = 'new#vmmaster_wsmessage#%s' % diff

                    self.ws.sendMessage(diff)
                    self.sent_sessions.extend(session_ids)
                    break

            # watching active session on page
            if active_session_ids:
                waiting_db_session_ids = []
                running_db_session_ids = []

                print 'Active sessions on page: ', len(active_session_ids)
                active_db_sessions = self.active_sessions_in_db(query)

                for db_session in active_db_sessions:
                    if db_session.status == 'waiting':
                        waiting_db_session_ids.append(db_session.id)
                    elif db_session.status == 'running':
                        running_db_session_ids.append(db_session.id)

                waiting_session_for_send = list(set(waiting_session_ids) - set(waiting_db_session_ids))
                running_session_for_send = list(set(running_session_ids) - set(running_db_session_ids))
                active_session_for_send = waiting_session_for_send + running_session_for_send

                print 'Active sessions in db: ', active_db_sessions.count()
                print 'Waiting sessions %s and running sessions %s ' % (waiting_db_session_ids, running_db_session_ids)

                if active_session_for_send:
                    print 'Active sessions for send: ', active_session_for_send

                    serialized_obj = serializers.serialize('json', Session.objects.filter(id__in=active_session_for_send))
                    diff = json.dumps(serialized_obj)
                    diff = 'update#vmmaster_wsmessage#%s' % diff

                    self.ws.sendMessage(diff)
                    self.sent_sessions.extend(active_session_for_send)
                    break

    def active_sessions_in_db(self, query):
        if self.ws.user.is_superuser:
            active_db_sessions = Session.objects\
                .filter(status__in=('waiting', 'running'))\
                .filter(name__icontains=query)
        else:
            active_db_sessions = Session.objects\
                .filter(status__in=('waiting', 'running'))\
                .filter(user=self.ws.user)\
                .filter(name__icontains=query)

        return active_db_sessions

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
