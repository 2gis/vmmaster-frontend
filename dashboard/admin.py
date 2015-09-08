# -*- coding: utf-8 -*-

from django.contrib import admin
from .models import Session, SessionLogStep, SubStep

from django.utils.html import format_html
from django.core.urlresolvers import reverse


class SubStepInline(admin.TabularInline):
    model = SubStep
    fk_name = 'session_log_step'

    def admin_link(self, instance):
        url = reverse('admin:dashboard_substep_change',
                      args=(instance.id,))
        return format_html('<a href="{}">Edit</a>', url)

    list_display = ('admin_link',)
    readonly_fields = ('id', 'admin_link', 'control_line', 'body',
                       'created',)


class SessionLogStepInline(admin.TabularInline):
    model = SessionLogStep
    fk_name = 'session'

    def admin_link(self, instance):
        url = reverse('admin:dashboard_sessionlogstep_change',
                      args=(instance.id,))
        return format_html('<a href="{}">Edit</a>', url)

    list_display = ('admin_link',)
    readonly_fields = ('id', 'admin_link', 'control_line', 'body',
                       'screenshot', 'created')


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user', 'created', 'modified',
                    'status', 'error', 'endpoint_id', 'endpoint_ip',
                    'endpoint_name')
    list_display_links = ('name',)
    readonly_fields = ('id', 'name', 'user', 'created', 'modified',
                       'status', 'error',)
    ordering = ('-created',)

    list_filter = ['user', 'status']

    search_fields = ['name', 'error', 'endpoint_name', 'endpoint_ip']

    inlines = [
        SessionLogStepInline,
    ]


@admin.register(SessionLogStep)
class SessionLogStepAdmin(admin.ModelAdmin):
    ordering = ('-created',)

    inlines = [
        SubStepInline,
    ]


@admin.register(SubStep)
class SubStepAdmin(admin.ModelAdmin):
    ordering = ('-created',)