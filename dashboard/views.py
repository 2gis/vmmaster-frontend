# -*- coding: utf-8 -*-

from django.shortcuts import render
from api.views import get_platforms, get_sessions, get_version


def dashboard(request):
    try:
        session_name = request.GET["q"]
    except:
        session_name = None

    context = {
        'sessions': get_sessions(request.user, session_name),
        'user': request.user,
        'version': get_version(request.user)
    }

    return render(request, 'dashboard/dashboard.html', context)


def platforms(request):
    context = {
        'platforms': get_platforms().get('platforms', None)
    }

    return render(request, 'dashboard/platforms.html', context)
