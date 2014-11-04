from django.conf.urls import url, include

from . import views

helpers_urls = [

    url(r'^step/$', views.log_step, name='log_step')
]

urlpatterns = [
    url(r'^(?P<session_id>\d+)/$', views.session),
    url(r'^(?P<session_id>\d+)/step/(?P<step_id>\d+)/$', views.log_step),
    url(r'^(?P<session_id>\d+)/session_step/(?P<session_step_id>\d+)/$', views.session_step),
    url(r'^(?P<session_id>\d+)/vmmaster_step/(?P<vmmaster_step_id>\d+)/$', views.vmmaster_step)
]