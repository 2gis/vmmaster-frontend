# -*- coding: utf-8 -*-

from django.conf.urls import url
from dashboard import views

urlpatterns = [
    url(r'^$', views.dashboard, name='dashboard'),
    url(r'^platforms', views.platforms, name='platforms')
]