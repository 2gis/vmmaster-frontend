from django.conf.urls import url

from dashboard import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    # url(r'^(?P<session_name>\d+)/$', views.exact_session, name='exact_session'),
]