# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import models
from django.conf import settings
import json


class VirtualMachine(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=100, blank=True)
    mac = models.CharField(max_length=100, blank=True)

    class Meta:
        managed = False
        db_table = 'virtual_machines'


class Session(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        blank=True,
        null=True,
        related_name="sessions",
        on_delete=models.SET_NULL,
    )
    endpoint_id = models.IntegerField(blank=True)
    endpoint_ip = models.CharField(max_length=100, blank=True)
    endpoint_name = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=100, blank=True)

    platform = models.CharField(max_length=100, blank=True)
    selenium_session = models.CharField(max_length=100, blank=True)
    dc = models.CharField(max_length=200, blank=True)
    error = models.CharField(max_length=200, blank=True)

    created = models.DateTimeField(blank=True, null=True)
    modified = models.DateTimeField(blank=True, null=True)

    timeouted = models.BooleanField(blank=True, default=False)
    closed = models.BooleanField(blank=True, default=False)
    take_screencast = models.BooleanField(blank=True, default=False)

    def __str__(self):
        return "[" + str(self.id) + "] " + self.name

    @property
    def take_screencast(self):
        dc = json.loads(self.dc)
        if dc.get('takeScreencast', None):
            return True
        else:
            return False

    class Meta:
        managed = False
        db_table = 'sessions'


class SessionLogStep(models.Model):
    id = models.IntegerField(primary_key=True)
    session = models.ForeignKey(
        Session, blank=True, null=True, related_name="session_steps")
    control_line = models.CharField(max_length=100, blank=True)
    body = models.CharField(max_length=100, blank=True)
    screenshot = models.CharField(max_length=100, blank=True)
    created = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'session_log_steps'

    def __str__(self):
        return "[" + str(self.id) + "] " + self.control_line


class SubStep(models.Model):
    id = models.IntegerField(primary_key=True)
    session_log_step = models.ForeignKey(
        SessionLogStep, blank=True, null=True, related_name="sub_steps")
    control_line = models.CharField(max_length=100, blank=True)
    body = models.CharField(max_length=100, blank=True)
    created = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sub_steps'

    def __str__(self):
        return "[" + str(self.id) + "] " + self.control_line
