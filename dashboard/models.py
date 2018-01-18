# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import models
from django.conf import settings
from datetime import datetime
import json


class PlatformGroup:
    PLATFORM_NAME_FIELD = "platform_name"
    BROWSERS_FIELD = "browsers"
    BROWSER_NAME_FIELD = "browser_name"
    BROWSER_VERSIONS_FIELD = "versions"

    def __init__(self, name, json_source):
        self.name = name
        self.source = json_source

    def _get_browsers(self):
        """
        :rtype: dict
        """
        browsers = {}
        for platform_specs in self.source.values():
            for browser_name, version in platform_specs.get(self.BROWSERS_FIELD).iteritems():
                if browser_name not in browsers:
                    browsers[browser_name] = []
                if version not in browsers[browser_name]:
                    browsers[browser_name].append(version)

        return browsers

    def build_dc(self):
        """
        :rtype: dict
        """
        def sort_version(ver):
            try:
                return int(ver.replace('.', ''))
            except ValueError:
                return 0

        dc = {
            self.PLATFORM_NAME_FIELD: self.name,
            self.BROWSERS_FIELD: [],
        }

        for browser_name, versions in self._get_browsers().iteritems():
            dc.get(self.BROWSERS_FIELD).append(
                {
                    self.BROWSER_NAME_FIELD: browser_name,
                    self.BROWSER_VERSIONS_FIELD: sorted(versions, key=sort_version)
                }
            )

        return dc

    def merge(self, platform_group):
        """
        :param PlatformGroup platform_group:
        """
        self.source.update(platform_group.source)


class ProviderConfig:
    def __init__(self, json_config):
        self.platform_groups = {}
        for platform_group, platforms in json_config.iteritems():
            if platform_group not in self.platform_groups:
                self.add_platform_group(PlatformGroup(platform_group, platforms))
            else:
                self.get_platform_group(platform_group).merge(PlatformGroup(platform_group, platforms))

    def add_platform_group(self, platform_group):
        """
        :param PlatformGroup platform_group:
        """
        self.platform_groups[platform_group.name] = platform_group

    def get_platform_group(self, key):
        """
        :param str key:

        :rtype: PlatformGroup
        """
        return self.platform_groups.get(key)

    def get_platform_group_names(self):
        """
        :rtype: list
        """
        return self.platform_groups.keys()

    def merge(self, provider_config):
        """
        :param ProviderConfig provider_config:
        """
        for platform_group_name in provider_config.get_platform_group_names():
            if platform_group_name not in self.get_platform_group_names():
                self.add_platform_group(provider_config.get_platform_group(platform_group_name))
            else:
                self.get_platform_group(platform_group_name).merge(
                    provider_config.get_platform_group(platform_group_name)
                )

    @ property
    def dc(self):
        """
        :rtype: list
        """
        return [i.build_dc() for i in self.platform_groups.values()]


class Provider(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, blank=True)
    url = models.CharField(max_length=1000, blank=True)
    active = models.BooleanField(blank=True, default=False)
    config = models.CharField(max_length=1000, blank=True)

    class Meta:
        managed = False
        db_table = 'providers'

    def get_config(self):
        return ProviderConfig(json.loads(self.config))


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
    take_screenshot = models.BooleanField(default=False)
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
