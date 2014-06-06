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

    # looking for error or exception
    features = list()
    features.append(error.lower().rfind("err"))
    features.append(error.lower().rfind("exception"))
    fiture_index = max(features)
    if fiture_index == -1:
        return error[-30:-1]

    # looking for start of sentence
    starts = list()
    starts.append(error.rfind(" ", 0, fiture_index))
    starts.append(error.rfind("\n", 0, fiture_index))
    index = max(starts)
    return error[index:]