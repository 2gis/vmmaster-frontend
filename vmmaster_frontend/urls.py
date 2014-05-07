from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'vmmaster_frontend.views.home', name='home'),
    url(r'^dashboard/', include('dashboard.urls')),
    url(r'^session/', include('session.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^screenshot/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': '/var/lib/vmmaster/screenshots',
            'show_indexes': True}),
)