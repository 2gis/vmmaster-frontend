from django.shortcuts import render

from dashboard.models import LogSteps


def session(request, session_id):
    log_steps = LogSteps.objects.filter(session_id=session_id).order_by("time")
    context = {
        'log_steps': log_steps
    }
    return render(request, 'session/session.html', context)