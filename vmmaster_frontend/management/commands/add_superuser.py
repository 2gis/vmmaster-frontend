from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from optparse import make_option


class Command(BaseCommand):

    option_list = BaseCommand.option_list + (
        make_option(
            '--user',
            action='store',
            default=None,
            help='Username for new user'),
        make_option(
            '--password',
            action='store',
            default=None,
            help='User Password'),
        )

    def handle(self, *args, **kwargs):
        user = get_user_model().objects.create_superuser(
            username=kwargs.get('user'),
            password=kwargs.get('password').strip(),
            )
        user.save()
