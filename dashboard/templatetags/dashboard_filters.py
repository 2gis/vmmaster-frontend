# -*- coding: utf-8 -*-

import datetime
from django import template

register = template.Library()


@register.filter
def timestamp_to_date(time):
    if time:
        return time.strftime('%H:%M:%S %d.%m.%Y')
    else:
        return None


@register.filter
def filter_error(error):
    if error is None:
        return ""

    # looking for error or exception
    features = list()
    features.append(error.lower().rfind("err"))
    features.append(error.lower().rfind("exception"))
    feature_index = max(features)
    if feature_index == -1:
        return error

    # looking for start of sentence
    starts = list()
    starts.append(error.rfind(" ", 0, feature_index))
    starts.append(error.rfind("\n", 0, feature_index))
    index = max(starts)
    return error[index:]
