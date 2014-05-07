from django.shortcuts import render

from dashboard.models import LogSteps, Sessions


def session(request, session_id):
    session = Sessions.objects.get(id=session_id)
    log_steps = LogSteps.objects.filter(session_id=session_id).order_by("time")
    context = {
        'session': session,
        'log_steps': log_steps
    }
    return render(request, 'session/session.html', context)


def log_step(request, session_id, step_id):
    log_step = LogSteps.objects.filter(id=step_id)[0]
    context = {
        'log_step': log_step
    }
    return render(request, 'session/log_step.html', context)