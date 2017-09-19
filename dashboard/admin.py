# -*- coding: utf-8 -*-

from django.contrib import admin
from .models import *


class SessionLogStepInline(admin.TabularInline):
    model = SessionLogStep
    fk_name = 'session'
    extra = 0
    list_display = ('id', 'control_line', 'body', 'screenshot', 'created')
    readonly_fields = ('id',)
    ordering = ('-created',)


class PlatformInline(admin.TabularInline):
    model = Platform
    fk_name = 'provider'
    extra = 0
    list_display = ('id', 'name',)
    readonly_fields = ('id', 'name',)
    ordering = ('name',)


@admin.register(Provider)
class ProviderAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'url', 'active')
    list_display_links = ('name',)
    inlines = [
        PlatformInline,
    ]


@admin.register(Platform)
class PlatformAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'provider_name')
    list_display_links = ('name',)
    readonly_fields = ('id', 'name', 'provider')
    ordering = ('-name',)


@admin.register(Endpoint)
class EndpointAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'name', 'ip', 'uuid', 'ports', 'ready', 'in_use', 'deleted',
        'created_time', 'used_time', 'deleted_time'
    )
    list_display_links = ('name',)
    readonly_fields = ('id', 'name', 'ip', 'ready', 'in_use', 'deleted',)
    list_filter = ['ready', 'in_use', 'deleted']
    search_fields = ['id', 'name', 'ip', 'uuid']
    ordering = ('-created_time',)


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'name',
        'created', 'modified', 'deleted',
        'duration', 'status', 'error',
        'timeouted', 'closed',
        'keep_forever'
    )
    list_display_links = ('name',)
    readonly_fields = ('id', 'name', 'user', 'status', 'error', )
    list_filter = ['user', 'status', 'timeouted', 'closed', 'keep_forever']
    search_fields = ['id', 'name', 'error', ]
    ordering = ('-created',)

    inlines = [
        SessionLogStepInline,
    ]
