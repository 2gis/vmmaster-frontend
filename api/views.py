# -*- coding: utf-8 -*-
from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist

import requests
import json
from rest_framework.pagination import LimitOffsetPagination
import versioneer
from django.conf import settings
from base64 import urlsafe_b64encode

from dashboard.models import Session, SessionLogStep, SubStep, Platform
from rest_framework import generics
from rest_framework.response import Response
from serializers import SessionSerializer, SessionStepSerializer, \
    SessionSubStepSerializer
from rest_framework import viewsets


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


def get_proxy_vnc_port(session_id):
    return _make_api_request('get', "session/%s/vnc_info" % session_id)


def generate_token(user):
    method = "POST"
    uri = "user/%s/regenerate_token" % str(user.id)
    headers = dict(Authorization="Basic " + urlsafe_b64encode(
        str(user.username) + ":" + str(user.password))
    )
    return _make_api_request(method=method, uri=uri, headers=headers)


def get_version():
    versioneer.VCS = 'git'
    versioneer.versionfile_source = 'vmmaster_frontend/_version.py'
    versioneer.versionfile_build = 'vmmaster_frontend/_version.py'
    versioneer.tag_prefix = ''  # tags are like 0.1.0
    versioneer.parentdir_prefix = 'vmmaster_frontend-'  # dirname like 'myproject-0.1.0'

    return versioneer.get_version()


def get_backend_version():
    version = _make_api_request(method="GET", uri="version")
    return version.get('version', None)


def _response_step(request, steps):
    response = None
    for num, step in enumerate(iter(steps)):
        if step == request:
            try:
                response = steps[num+1]
            except IndexError:
                response = None

    return response


def _combine_steps(steps):
    it = iter(steps)
    requests = []
    for req in it:
        try:
            next_item = next(it)
            req = set_total_time(req, next_item)
            response = {}
            if next_item:
                response['status'] = next_item.control_line.split(" ")[0] if next_item.control_line else None
                response['body'] = next_item.body if next_item.body else None
                response['created'] = next_item.created if next_item.created else None
            else:
                raise StopIteration
        except StopIteration:
            response = None

        setattr(req, 'response', response)
        req = set_substeps(req)
        requests.append(req)
    return requests


def set_total_time(step, _next):
    try:
        if _next:
            duration = _next.created - step.created
        elif step.closed:
            duration = step.modified - step.created
        else:
            duration = datetime.now() - step.created
        step.duration = round(duration.total_seconds(), 2)
    except Exception:
        step.duration = None
    return step


def set_substeps(step):
    if SubStep.objects.filter(session_log_step=step).count() > 0:
        step.substeps = True
    return step


def get_id_from_uri(uri, value):
    try:
        return uri.split('%s/' % value)[1].split('/')[0]
    except IndexError:
        return None


class APIPagination(LimitOffsetPagination):
    page_size = 10
    max_page_size = 10
    default_limit = 10


class SessionList(viewsets.ReadOnlyModelViewSet):
    queryset = Session.objects.order_by('-created')
    serializer_class = SessionSerializer
    pagination_class = APIPagination

    def get_queryset(self):
        search_phrase = self.request.REQUEST.get('search', '')

        if self.request.user.is_superuser:
            return self.queryset\
                .filter(name__icontains=search_phrase)

        elif self.request.user.is_authenticated():
            return self.queryset\
                .filter(user=self.request.user)\
                .filter(name__icontains=search_phrase)
        else:
            return self.queryset.filter(user=1)\
                .filter(name__icontains=search_phrase)


class SessionSteps(viewsets.ReadOnlyModelViewSet):
    queryset = SessionLogStep.objects
    serializer_class = SessionStepSerializer
    pagination_class = APIPagination

    @property
    def session_id(self):
        return get_id_from_uri(self.request.path_info, 'sessions')

    @property
    def step_id(self):
        return get_id_from_uri(self.request.path_info, 'steps')

    def get_object(self):
        if self.step_id:
            req = self.queryset.get(id=self.step_id)
            steps = SessionLogStep.objects.filter(session_id=req.session_id).\
                order_by('created')

            return _combine_steps([req, _response_step(req, steps)]).pop()

    def get_queryset(self):
        if self.session_id:
            steps = self.queryset\
                .filter(session_id=self.session_id)\
                .order_by('created')
            return _combine_steps(steps)

    def list(self, request, *args, **kwargs):
        try:
            session = Session.objects.get(id=self.session_id)
            return super(SessionSteps, self).list(request, *args, **kwargs)
        except ObjectDoesNotExist:
            return Response(status=404, data={"detail": "Session steps not found"})

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance:
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        else:
            return Response(status=404, data={"detail": "Step not found"})


class SessionSubSteps(viewsets.ReadOnlyModelViewSet):
    queryset = SubStep.objects
    serializer_class = SessionSubStepSerializer
    pagination_class = APIPagination

    @property
    def sub_step_id(self):
        return get_id_from_uri(self.request.path_info, 'substeps')

    @property
    def step_id(self):
        return get_id_from_uri(self.request.path_info, 'steps')

    def get_queryset(self):
        if self.step_id:
            steps = self.queryset\
                .filter(session_log_step_id=self.step_id)\
                .order_by('created')
            return _combine_steps(steps)

    def get_object(self):
        if self.step_id and self.sub_step_id:
            req = self.queryset.get(id=self.sub_step_id)
            steps = SubStep.objects.filter(session_log_step_id=req.session_log_step_id).\
                order_by('created')

            return _combine_steps([req, _response_step(req, steps)]).pop()

    def list(self, request, *args, **kwargs):
        try:
            step = SessionLogStep.objects.get(id=self.step_id)
            return super(SessionSubSteps, self).list(request, *args, **kwargs)
        except ObjectDoesNotExist:
            return Response(status=404, data={"detail": "Session substeps not found"})

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance:
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        else:
            return Response(status=404, data={"detail": "Substep not found"})


class Platforms(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        if Platform.objects.count():
            return Response({'platforms': sorted(
                [i.name for i in Platform.objects.distinct('name').all()]
            )})
        else:
            return Response({})


class GetToken(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        data = None
        if request.user.is_authenticated() and not request.user.is_superuser:
            data = request.user.token

        return Response(data)


class GenerateToken(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        return Response(request.user.regenerate_token())
