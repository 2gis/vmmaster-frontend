# -*- coding: utf-8 -*-

import requests
import json
from django.conf import settings
from base64 import urlsafe_b64encode

from dashboard.models import Session


def _make_api_request(method, uri, headers=None, body=None):
    if headers is None:
        headers = {}

    if body is None:
        body = ""

    try:
        response = requests.request(method,
                                    "%s/%s" % (settings.VMMASTER_API_URL, uri),
                                    headers=headers,
                                    data=body)
        content = json.loads(response.content)
        return content.get("result")
    except:
        return {}


def _make_vmpool_api_request(method, uri, headers=None, body=None):
    if headers is None:
        headers = {}

    if body is None:
        body = ""

    try:
        response = requests.request(method,
                                    "%s/%s" % (settings.VMPOOL_API_URL, uri),
                                    headers=headers,
                                    data=body)
        content = json.loads(response.content)
        return content.get("result")
    except:
        return {}


def get_sessions(user, session_name=None):
    if user.is_superuser:
        sessions = Session.objects.all()
    elif user.is_authenticated():
        sessions = Session.objects.filter(user=user)
    else:
        sessions = Session.objects.filter(user=1)

    if session_name:
        sessions = sessions.filter(name__icontains=session_name)

    return sessions.order_by('-time_created')


def get_platforms():
    return _make_vmpool_api_request("get", "platforms")


def generate_token(user):
    method = "POST"
    uri = "user/%s/regenerate_token" % str(user.id)
    headers = dict(Authorization="Basic " + urlsafe_b64encode(
        str(user.username) + ":" + str(user.password))
    )
    return _make_api_request(method=method, uri=uri, headers=headers)
