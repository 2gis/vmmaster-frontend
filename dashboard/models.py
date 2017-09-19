# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import models
from django.conf import settings
from datetime import datetime
import json


class Provider(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, blank=True)
    url = models.CharField(max_length=1000, blank=True)
    active = models.BooleanField(blank=True, default=False)

    class Meta:
        managed = False
        db_table = 'providers'


class Platform(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(max_length=100, blank=True)

    # Relationships
    provider = models.ForeignKey(Provider, blank=True, null=True, related_name="platforms", on_delete=models.SET_NULL)

    class Meta:
        managed = False
        db_table = 'platforms'

    @property
    def provider_name(self):
        return self.provider.name


class Endpoint(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)

    provider = models.ForeignKey(Provider, blank=True, null=True, related_name="endpoints", on_delete=models.SET_NULL)
    platform = models.ForeignKey(Platform, blank=True, null=True, related_name="endpoints", on_delete=models.SET_NULL)

    uuid = models.CharField(max_length=128, blank=True)
    name = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=100, blank=True)

    ports = models.CharField(max_length=500, blank=True, null=True)

    ready = models.BooleanField(blank=True, default=False)
    in_use = models.BooleanField(blank=True, default=False)
    deleted = models.BooleanField(blank=True, default=False)

    created_time = models.DateTimeField(blank=True, null=True)
    used_time = models.DateTimeField(blank=True, null=True)
    deleted_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'endpoints'


class Session(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)

    user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, related_name="sessions", on_delete=models.SET_NULL, )
    endpoint = models.ForeignKey(Endpoint, blank=True, null=True, related_name="session", on_delete=models.SET_NULL, )

    name = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=100, blank=True)

    platform = models.CharField(max_length=100, blank=True)
    selenium_session = models.CharField(max_length=100, blank=True)
    dc = models.CharField(max_length=2000, blank=True)
    error = models.CharField(max_length=200, blank=True)

    created = models.DateTimeField(blank=True, null=True)
    modified = models.DateTimeField(blank=True, null=True)
    deleted = models.DateTimeField(blank=True, null=True)

    timeouted = models.BooleanField(blank=True, default=False)
    closed = models.BooleanField(blank=True, default=False)
    keep_forever = models.BooleanField(blank=True, default=False)

    selenium_log = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return str(self.id)

    def username(self):
        return self.user.username

    @property
    def take_screencast(self):
        dc = json.loads(self.dc)
        if dc.get('takeScreencast', None):
            return True
        else:
            return False

    @property
    def duration(self):
        if self.deleted:
            return round((self.deleted - self.created).total_seconds(), 2)
        else:
            return round((datetime.now() - self.created).total_seconds(), 2)

    @property
    def endpoint_ip(self):
        return self.endpoint.ip

    @property
    def endpoint_name(self):
        return self.endpoint.name

    class Meta:
        managed = False
        db_table = 'sessions'


class SessionLogStep(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    session = models.ForeignKey(
        Session, blank=True, null=True, related_name="session_steps")
    control_line = models.CharField(max_length=100, blank=True)
    body = models.CharField(max_length=2000, blank=True)
    screenshot = models.CharField(max_length=100, blank=True)
    created = models.DateTimeField(blank=True, null=True)
    response = None
    duration = None
    substeps = None

    class Meta:
        managed = False
        db_table = 'session_log_steps'

    def __str__(self):
        return str(self.id)


class SubStep(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    session_log_step = models.ForeignKey(
        SessionLogStep, blank=True, null=True, related_name="sub_steps")
    control_line = models.CharField(max_length=100, blank=True)
    body = models.CharField(max_length=2000, blank=True)
    created = models.DateTimeField(blank=True, null=True)
    response = None
    duration = None

    class Meta:
        managed = False
        db_table = 'sub_steps'

    def __str__(self):
        return str(self.id)
