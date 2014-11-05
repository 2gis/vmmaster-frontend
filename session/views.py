import json

from django.shortcuts import render

from dashboard.models import VmmasterLogSteps, Sessions, SessionLogSteps


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


def session(request, session_id):
    session = Sessions.objects.get(id=session_id)
    vmmaster_log_steps = VmmasterLogSteps.objects.filter(session_id=session_id).order_by("time")
    context = {
        'session': session,
        'vmmaster_log_steps': _requests(vmmaster_log_steps)
    }
    return render(request, 'session/session.html', context)


def log_step(request, session_id, step_id):
    log_step = VmmasterLogSteps.objects.get(id=step_id)
    session_log_steps = SessionLogSteps.objects.filter(vmmaster_log_step_id=log_step.id).order_by('time')
    context = {
        'log_step': log_step,
        'session_log_steps': _requests(session_log_steps)
    }
    return render(request, 'session/vmmaster_log_step.html', context)


def _response(request, steps):
    response = None
    for num, step in enumerate(iter(steps)):
        if step == request:
            try:
                response = steps[num+1]
            except IndexError:
                response = None

    return response


def session_step(request, session_id, session_step_id):
    req = SessionLogSteps.objects.get(id=session_step_id)
    steps = SessionLogSteps.objects.filter(vmmaster_log_step_id=req.vmmaster_log_step_id).order_by('time')

    context = {
        'request': req,
        'response': _response(req, steps)
    }
    return render(request, 'session/session_log_step.html', context)


def vmmaster_step(request, session_id, vmmaster_step_id):
    req = VmmasterLogSteps.objects.get(id=vmmaster_step_id)
    steps = VmmasterLogSteps.objects.filter(session_id=req.session_id).order_by('time')

    context = {
        'request': req,
        'response': _response(req, steps)
    }
    return render(request, 'session/session_log_step.html', context)