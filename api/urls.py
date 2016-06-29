# -*- coding: utf-8 -*-

from django.conf.urls import url, include
from rest_framework import routers
import views

API_VERSION = 'v1'

router = routers.DefaultRouter()
router.register(r'%s/sessions_status' % API_VERSION, views.SessionStatusList)
router.register(r'%s/sessions' % API_VERSION, views.SessionList)
router.register(r'%s/sessions/([0-9]+)/steps' % API_VERSION, views.SessionSteps)
router.register(r'%s/sessions/([0-9]+)/steps/([0-9]+)/substeps' % API_VERSION, views.SessionSubSteps)

urlpatterns = [
    url(r'^%s/platforms$' % API_VERSION, views.Platforms.as_view()),
    url(r'^%s/user/token' % API_VERSION, views.GetToken.as_view()),
    url(r'^%s/user/generate_token' % API_VERSION, views.GenerateToken.as_view()),
    url(r'^%s/endpoints' % API_VERSION, views.get_endpoints, name='get_endpoints'),
    url(r'^', include(router.urls))
]

