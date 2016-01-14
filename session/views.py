# -*- coding: utf-8 -*-
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from django.http import HttpResponse
from api.views import get_proxy_vnc_port
from dashboard.models import Session
from vmmaster_frontend import settings


def get_proxy_vnc_host(api_url_string):
    try:
        return api_url_string.split("/")[2].split(":")[0]
    except IndexError:
        return ''


def session_main(request, session_id):
    try:
        session = Session.objects.get(id=session_id)
    except ObjectDoesNotExist:
        context = {'session_id': session_id}
        return render(request, 'session/session_not_exists.html', context)

    context = {
        'proxy_vnc_host': get_proxy_vnc_host(settings.VMMASTER_API_URL)
    }
    return render(request, 'session/session.html', context)


def sub_step(request, session_id, sub_step_id):
    return render(request, 'session/sub_step.html', {})


def session_step(request, session_id, session_step_id):
    return render(request, 'session/step.html', {})


def proxy_vnc_port(request, session_id):
    response = get_proxy_vnc_port(session_id)
    if response:
        response = response.get('vnc_proxy_port', None)

    return HttpResponse(response)
