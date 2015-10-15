# -*- coding: utf-8 -*-

from django.shortcuts import render
from dashboard.models import Session, SessionLogStep, SubStep
from datetime import datetime
from django.http import HttpResponse
from api.views import get_proxy_vnc_port


def _requests(steps):
    it = iter(steps)
    requests = []
    for req in it:
        try:
            response_status = next(it).control_line.split(" ")[0]
        except StopIteration:
            response_status = None
        setattr(req, 'response_status', response_status)
        requests.append(req)
    return requests


def set_total_time(log_steps):
    new_log_steps = []
    for item, _next in map(lambda i, j: (i, j), log_steps, log_steps[1:]):
        try:
            if _next:
                total_time = _next.created - item.created
            elif item.session.closed:
                total_time = item.session.modified - item.created
            else:
                total_time = datetime.now() - item.created
            item.total_time = round(total_time.total_seconds(), 2)
        except Exception:
            item.total_time = None
        new_log_steps.append(item)
    return new_log_steps


def session_main(request, session_id):
    session = Session.objects.get(id=session_id)
    session_log_steps = SessionLogStep.objects.filter(session_id=session_id).\
        order_by("created")
    context = {
        'session': session,
        'session_log_steps': _requests(set_total_time(session_log_steps)),
        'host': request.META['HTTP_HOST']
    }
    return render(request, 'session/session.html', context)


def log_step(request, session_id, step_id):
    session_log_step = SessionLogStep.objects.get(id=step_id)
    sub_steps = SubStep.objects.filter(
        session_log_step_id=session_log_step.id).order_by('created')
    context = {
        'log_step': log_step,
        'sub_steps': _requests(set_total_time(sub_steps))
    }
    return render(request, 'session/session_log_step.html', context)


def _response(request, steps):
    response = None
    for num, step in enumerate(iter(steps)):
        if step == request:
            try:
                response = steps[num+1]
            except IndexError:
                response = None

    return response


def sub_step(request, session_id, sub_step_id):
    req = SubStep.objects.get(id=sub_step_id)
    steps = SubStep.objects.filter(
        session_log_step_id=req.session_log_step_id).order_by('created')

    context = {
        'request': req,
        'response': _response(req, steps)
    }
    return render(request, 'session/sub_step.html', context)


def session_step(request, session_id, session_step_id):
    req = SessionLogStep.objects.get(id=session_step_id)
    steps = SessionLogStep.objects.filter(session_id=req.session_id).\
        order_by('created')

    context = {
        'request': req,
        'response': _response(req, steps)
    }
    return render(request, 'session/sub_step.html', context)


def proxy_vnc_port(request, session_id):
    response = get_proxy_vnc_port(session_id)
    if response:
        response = response.get('vnc_proxy_port', None)

    return HttpResponse(response)
