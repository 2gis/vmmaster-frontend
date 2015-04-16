from django.shortcuts import render

from .models import Session
from api.views import get_platforms, get_queue, get_sessions


def dashboard(request):
    try:
        session_name = request.GET["q"]
    except:
        session_name = ''

    if not session_name:
        sessions = Session.objects.all()
    else:
        sessions = Session.objects.filter(name__icontains=session_name)

    sessions = sessions.order_by('-time')
    platforms = get_platforms()
    active_sessions = get_sessions()
    queue = get_queue()

    context = {
        'sessions': sessions,
        'platforms': platforms,
        'active_sessions': active_sessions,
        'queue': queue
    }
    return render(request, 'dashboard/dashboard.html', context)