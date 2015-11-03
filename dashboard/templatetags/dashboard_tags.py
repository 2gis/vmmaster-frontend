# -*- coding: utf-8 -*-

from django import template


register = template.Library()


@register.inclusion_tag('dashboard/hat.html')
def show_hat(user=None):
    if not user.is_anonymous():
        return {'username': user.get_username(), 'token': user.token}
    return {}


@register.inclusion_tag('dashboard/show_version.html')
def show_version(version):
    return {'version': version}