import json
import base64

import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'vmmaster_frontend.settings'
import django
django.setup()

from django.contrib.sessions.models import Session as UserSession
from users.models import VmmasterUser
from django.utils.encoding import force_unicode

from twisted.web.server import Site
from twisted.web.resource import Resource
from twisted.internet.threads import deferToThread
from autobahn.twisted.websocket import WebSocketServerFactory, WebSocketServerProtocol
from autobahn.twisted.resource import WebSocketResource

from watcher.sessions import WatchSessionsThread


def get_user(headers):
    session_key = ''
    cookies = headers.get('cookie').split('; ')
    for item in cookies:
        item = item.split('=')
        if item[0] == 'sessionid':
            session_key = item[1]

    if session_key:
        session = UserSession.objects.get(session_key=session_key)
        session_data = force_unicode(session.session_data)
        encoded_data = base64.decodestring(session_data)
        hash, pickled = encoded_data.split(':', 1)
        data = json.loads(pickled)

        if data:
            uid = data.get('_auth_user_id')
        else:
            uid = 1
    else:
        uid = 1

    user = VmmasterUser.objects.get(pk=uid)

    return user


class WatchSessionsProtocol(WebSocketServerProtocol):
    user = ''
    watch_thread = None

    def onOpen(self):
        self.watch_thread = None
        self.user = get_user(self.http_headers)
        print 'Open Connection for %s' % self.user

    def onMessage(self, payload, isBinary):
        data = json.loads(payload)
        if self.watch_thread:
            print 'Restart watching for %s...' % self.user
            self.watch_thread.stop()
            self.watch_thread = None

        print 'Start watching for %s...' % self.user
        self.watch_thread = WatchSessionsThread()
        self.watch_thread.ws = self
        self.watch_thread.state = data
        self.watch_thread.start()

        d = deferToThread(self.watch_thread, data)
        d.addBoth(lambda r: None)

    def endConnection(self):
        print 'Force close connection for %s' % self.user
        self.sendClose()

    def onClose(self, wasClean, code, reason):
        if self.watch_thread:
            self.watch_thread.stop()
            self.watch_thread = None
        print 'Close connection for %s' % self.user


class WatchSessions(WebSocketResource):
    isLeaf = True

    def __init__(self):
        wsfactory = WebSocketServerFactory()
        wsfactory.protocol = WatchSessionsProtocol
        wsfactory.setProtocolOptions(echoCloseCodeReason=True)
        super(WatchSessions, self).__init__(wsfactory)


class WatchServer(Site):
    root = Resource()

    def __init__(self):
        Site.__init__(self, self.root)
        self.root.server = self
        self.root.putChild('sessions', WatchSessions())