from optparse import make_option
from django.conf import settings
from django.core.management.base import BaseCommand
from twisted.internet import reactor as twisted_reactor
from twisted.internet.endpoints import TCP4ServerEndpoint

from watcher.protocols import WatchServer


class Command(BaseCommand):

    option_list = BaseCommand.option_list + (
        make_option(
            '--port',
            action='store',
            dest='port',
            default=getattr(settings, 'WATCHSERVER_PORT', 8001),
            help='What port number to run the socket server on'),
        make_option(
            '--no-keep-alive',
            action='store_true',
            dest='no_keep_alive',
            default=False,
            help='Set no_keep_alive on the connection if your server needs it')
    )

    def handle(self, **options):
        PORT = int(options['port'])
        endpoint_api = TCP4ServerEndpoint(twisted_reactor, PORT)
        endpoint_api.listen(WatchServer())

        print "Running sock app on port", PORT
        try:
            twisted_reactor.run()
        except KeyboardInterrupt:
            # so you don't think you errored when ^C'ing out
            pass