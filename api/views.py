import requests
import json

from django.shortcuts import render
from django.conf import settings


# Create your views here.


def _make_api_request(method, uri, headers=None, body=None):
    if headers is None:
        headers = {}

    if body is None:
        body = ""

    response = requests.request(
        method, "%s/%s" % (settings.VMMASTER_API_URL, uri), headers=headers, data=body)
    content = json.loads(response.content)
    return content.get("result")


def get_sessions():
    return _make_api_request("get", "sessions")


def get_platforms():
    return _make_api_request("get", "platforms")


def get_queue():
    return _make_api_request("get", "queue")
