from django.conf import settings

from twisted.application.internet import TCPServer
from twisted.application.service import Application

from watcher.protocols import WatchServer

service = WatchServer()
application = Application("watchserver")
watchServerService = TCPServer(settings.WATCHSERVER_PORT, service)
watchServerService.setServiceParent(application)
