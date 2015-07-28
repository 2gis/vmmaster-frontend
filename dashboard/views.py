# -*- coding: utf-8 -*-

from django.shortcuts import render
from api.views import get_platforms, get_sessions


def dashboard(request):
    try:
        session_name = request.GET["q"]
    except:
        session_name = None

    context = {
        'sessions': get_sessions(request.user, session_name),
        'platforms': get_platforms(),
        'user': request.user
    }

    return render(request, 'dashboard/dashboard.html', context)