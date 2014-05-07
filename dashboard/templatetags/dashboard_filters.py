import datetime

from django import template

register = template.Library()


@register.filter
def timestamp_to_date(time):
    return datetime.datetime.fromtimestamp(time).strftime('%H:%M:%S %d.%m.%Y')