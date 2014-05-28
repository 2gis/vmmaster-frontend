import datetime

from django import template

register = template.Library()


@register.filter
def timestamp_to_date(time):
    return datetime.datetime.fromtimestamp(time).strftime('%H:%M:%S %d.%m.%Y')


@register.filter
def filter_error(error):
    if error is None:
        return ""

    error_index = error.lower().rfind("err")
    if error_index == -1:
        return error[-30:-1]

    space_error_index = error.rfind(" ", 0, error_index)
    linebreak_error_index = error.rfind("\n", 0, error_index)
    index = space_error_index if space_error_index > linebreak_error_index else linebreak_error_index
    return error[index:]