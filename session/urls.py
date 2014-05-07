from django.conf.urls import url, include

from . import views

helpers_urls = [

    url(r'^step/$', views.log_step, name='log_step')
]

urlpatterns = [
    url(r'^(?P<session_id>\d+)/$', views.session),
    url(r'^(?P<session_id>\d+)/step/(?P<step_id>\d+)/$', views.log_step)
]