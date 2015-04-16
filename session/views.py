from django.shortcuts import render
from dashboard.models import Session, SessionLogStep, AgentLogStep


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
    session = Session.objects.get(id=session_id)
    vmmaster_log_steps = SessionLogStep.objects.filter(session_id=session_id).order_by("time")
    context = {
        'session': session,
        'vmmaster_log_steps': _requests(vmmaster_log_steps)
    }
    return render(request, 'session/session.html', context)


def log_step(request, session_id, step_id):
    log_step = SessionLogStep.objects.get(id=step_id)
    session_log_steps = AgentLogStep.objects.filter(vmmaster_log_step_id=log_step.id).order_by('time')
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
    req = AgentLogStep.objects.get(id=session_step_id)
    steps = AgentLogStep.objects.filter(vmmaster_log_step_id=req.vmmaster_log_step_id).order_by('time')

    context = {
        'request': req,
        'response': _response(req, steps)
    }
    return render(request, 'session/session_log_step.html', context)


def vmmaster_step(request, session_id, vmmaster_step_id):
    req = SessionLogStep.objects.get(id=vmmaster_step_id)
    steps = SessionLogStep.objects.filter(session_id=req.session_id).order_by('time')

    context = {
        'request': req,
        'response': _response(req, steps)
    }
    return render(request, 'session/session_log_step.html', context)