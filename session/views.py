from django.shortcuts import render

from dashboard.models import VmmasterLogSteps, Sessions, SessionLogSteps


def session(request, session_id):
    session = Sessions.objects.get(id=session_id)
    vmmaster_log_steps = VmmasterLogSteps.objects.filter(session_id=session_id).order_by("time")
    context = {
        'session': session,
        'vmmaster_log_steps': vmmaster_log_steps
    }
    return render(request, 'session/session.html', context)


def log_step(request, session_id, step_id):
    log_step = VmmasterLogSteps.objects.get(id=step_id)
    session_log_steps = SessionLogSteps.objects.filter(vmmaster_log_step_id=log_step.id)
    context = {
        'log_step': log_step,
        'session_log_steps': session_log_steps
    }
    return render(request, 'session/vmmaster_log_step.html', context)


def session_log_step(request, session_id, vmmaster_step_id, session_step_id):
    pass