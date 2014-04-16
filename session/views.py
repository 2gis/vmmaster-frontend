from django.shortcuts import render

from dashboard.models import LogSteps

def session(request, session_id):
    # sessions = Sessions.objects.all()[:3]
    # # output = ', '.join([p.question_text for p in latest_question_list])
    # context = {
    #     'sessions': sessions
    # }
    # return render(request, 'dashboard/dashboard.html', context)
    # log_steps = LogSteps.objects.get(session_id=session_id)
    log_steps = LogSteps.objects.filter(session_id=session_id).order_by("time")
    context = {
        'log_steps' : log_steps
    }
    print log_steps
    return render(request, 'session/session.html', context)