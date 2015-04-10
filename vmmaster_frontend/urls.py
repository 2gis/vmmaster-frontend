from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings

admin.site.site_header = 'Vmmaster frontend'

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
)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += patterns('',
        url(r'^__debug__/', include(debug_toolbar.urls)),
    )