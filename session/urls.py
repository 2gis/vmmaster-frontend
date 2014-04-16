from django.conf.urls import url

from session import views

urlpatterns = [
    # url(r'^$', views.session, name='session'),
    url(r'^(?P<session_id>\d+)/$', views.session, name='session'),
]