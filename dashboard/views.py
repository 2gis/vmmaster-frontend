# -*- coding: utf-8 -*-

from django.shortcuts import render
from api.views import get_version

def dashboard(request):
    context = {
        'user': request.user,
        'version': get_version(request.user)
    }

    return render(request, 'dashboard/dashboard.html', context)
