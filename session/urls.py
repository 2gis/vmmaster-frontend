# -*- coding: utf-8 -*-

from django.conf.urls import url
from . import views

helpers_urls = [
    url(r'^step/$', views.log_step, name='log_step')
]

urlpatterns = [
    url(r'^(?P<session_id>\d+)/$', views.session),
    url(r'^(?P<session_id>\d+)/step/(?P<step_id>\d+)/$', views.log_step),
    url(r'^(?P<session_id>\d+)/agent_step/(?P<agent_step_id>\d+)/$',
        views.agent_step),
    url(r'^(?P<session_id>\d+)/session_step/(?P<session_step_id>\d+)/$',
        views.session_step)
]