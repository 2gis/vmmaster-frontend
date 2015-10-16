# -*- coding: utf-8 -*-

from django import template

register = template.Library()


@register.filter
def timestamp_to_date(time):
    if time:
        return time.strftime('%H:%M:%S %d.%m.%Y')
    else:
        return None


@register.filter
def text_status(status):
    if status == 'waiting':
        return 'default'
    if status == 'running':
        return 'warning'
    if status == 'failed':
        return 'danger'
    else:
        return 'success'