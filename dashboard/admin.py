# -*- coding: utf-8 -*-

from django.contrib import admin
from .models import Session, SessionLogStep, AgentLogStep

from django.utils.html import format_html
from django.core.urlresolvers import reverse


class AgentLogStepInline(admin.TabularInline):
    model = AgentLogStep
    fk_name = 'session_log_step'

    def admin_link(self, instance):
        url = reverse('admin:dashboard_agentlogstep_change',
                      args=(instance.id,))
        return format_html('<a href="{}">Edit</a>', url)

    list_display = ('admin_link',)
    readonly_fields = ('id', 'admin_link', 'control_line', 'body',
                       'time_created',)


class SessionLogStepInline(admin.TabularInline):
    model = SessionLogStep
    fk_name = 'session'

    def admin_link(self, instance):
        url = reverse('admin:dashboard_sessionlogstep_change',
                      args=(instance.id,))
        return format_html('<a href="{}">Edit</a>', url)

    list_display = ('admin_link',)
    readonly_fields = ('id', 'admin_link', 'control_line', 'body',
                       'screenshot', 'time_created')


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user', 'time_created', 'time_modified',
                    'status', 'error',)
    list_display_links = ('name',)
    readonly_fields = ('id', 'name', 'user', 'time_created', 'time_modified',
                       'status', 'error',)
    ordering = ('-time_created',)

    list_filter = ['user', 'status']

    search_fields = ['name']

    inlines = [
        SessionLogStepInline,
    ]


@admin.register(SessionLogStep)
class SessionLogStepAdmin(admin.ModelAdmin):
    ordering = ('-time_created',)

    inlines = [
        AgentLogStepInline,
    ]


@admin.register(AgentLogStep)
class AgentLogStepAdmin(admin.ModelAdmin):
    ordering = ('-time_created',)