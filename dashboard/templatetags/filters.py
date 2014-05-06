import datetime

from django import template

register = template.Library()


@register.filter
def timestamp_to_date(time):
    return datetime.datetime.fromtimestamp(time).strftime('%Y-%m-%d %H:%M:%S')