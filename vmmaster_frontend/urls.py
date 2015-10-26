# -*- coding: utf-8 -*-

from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from dashboard import views as dviews

admin.site.site_header = 'vmmaster frontend'

urlpatterns = patterns(
    '',
    url(r'^$', 'vmmaster_frontend.views.home', name='home'),
    url(r'^dashboard/', include('dashboard.urls')),
    url(r'^session/', include('session.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^user/', include('users.urls')),
    url(r'^screenshot/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': '/var/lib/vmmaster/screenshots',
            'show_indexes': True}),
    url(r'^api/', include('api.urls')),
)
