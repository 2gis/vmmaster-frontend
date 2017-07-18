# -*- coding: utf-8 -*-

from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^(?P<session_id>\d+)/$', views.session_main),
    url(r'^(?P<session_id>\d+)/step/(?P<session_step_id>\d+)/$',
        views.session_step),
    url(r'^(?P<session_id>\d+)/step/([0-9]+)/sub_step/(?P<sub_step_id>\d+)/$',
        views.sub_step),
    url(r'^(?P<session_id>\d+)/proxy_vnc_port$', views.proxy_vnc_port, name='proxy_vnc_port')
]
