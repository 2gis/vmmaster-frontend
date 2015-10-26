# -*- coding: utf-8 -*-

import requests
import json
from rest_framework.pagination import PageNumberPagination
import versioneer
from django.conf import settings
from base64 import urlsafe_b64encode

from dashboard.models import Session
from rest_framework import generics
from rest_framework.response import Response
from serializers import SessionSerializer


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


def get_sessions(user, session_name=None):
    if user.is_superuser:
        sessions = Session.objects.all()
    elif user.is_authenticated():
        sessions = Session.objects.filter(user=user)
    else:
        sessions = Session.objects.filter(user=1)

    if session_name:
        sessions = sessions.filter(name__icontains=session_name)

    return sessions.order_by('-created')


def get_platforms():
    return _make_api_request("get", "platforms")


def get_proxy_vnc_port(session_id):
    return _make_api_request('get', "session/%s/vnc_info" % session_id)


def generate_token(user):
    method = "POST"
    uri = "user/%s/regenerate_token" % str(user.id)
    headers = dict(Authorization="Basic " + urlsafe_b64encode(
        str(user.username) + ":" + str(user.password))
    )
    return _make_api_request(method=method, uri=uri, headers=headers)


def get_version(user):
    if user.is_superuser:
        versioneer.VCS = 'git'
        versioneer.versionfile_source = 'vmmaster_frontend/_version.py'
        versioneer.versionfile_build = 'vmmaster_frontend/_version.py'
        versioneer.tag_prefix = ''  # tags are like 0.1.0
        versioneer.parentdir_prefix = 'vmmaster_frontend-'  # dirname like 'myproject-0.1.0'

        return versioneer.get_version()


class SessionPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10


class SessionList(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        if request.user.is_superuser:
            sessions = Session.objects.all()
        elif request.user.is_authenticated():
            sessions = Session.objects.filter(user=request.user)
        else:
            sessions = Session.objects.filter(user=1)

        sessions = sessions.order_by('-created')
        serializer = SessionSerializer(sessions, many=True)
        paginator = SessionPagination()
        data = paginator.paginate_queryset(serializer.data, request)

        return paginator.get_paginated_response(data)
        # return Response(serializer.data)


class SessionDetail(generics.RetrieveAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer


class Platforms(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        return Response(_make_api_request("get", "platforms"))


class GetToken(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        data = {}
        if request.user.is_authenticated() and not request.user.is_superuser:
            data = ({'token': request.user.token})

        return Response(data)


class GenerateToken(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        uri = "user/%s/regenerate_token" % str(request.user.id)
        headers = dict(Authorization="Basic " + urlsafe_b64encode(
            str(request.user.username) + ":" + str(request.user.password))
        )

        result = _make_api_request(method="POST", uri=uri, headers=headers)
        if result:
            return GetToken().get(request, *args, **kwargs)
        else:
            return Response({})