# -*- coding: utf-8 -*-

from django import template
from api.views import get_version, get_backend_version


register = template.Library()


@register.inclusion_tag('dashboard/hat.html')
def show_hat(user=None):
    if not user.is_anonymous():
        hat_params = {
            'username': user.get_username(),
            'token': user.token,
            'version': ''
        }
        if user.is_superuser:
            hat_params['backend_version'] = get_backend_version()
            hat_params['version'] = get_version()
    else:
        hat_params = {}

    return hat_params