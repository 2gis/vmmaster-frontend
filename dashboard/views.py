from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist

from dashboard.models import Sessions
from api.views import get_platforms, get_queue, get_sessions


def dashboard(request):
    try:
        session = request.GET["q"]
    except:
        session = ''

    if not session:
        sessions = Sessions.objects.order_by('-time')
    else:
        try:
            sessions = Sessions.objects.filter(name=session)
        except ObjectDoesNotExist:
            sessions = None

        if sessions and not hasattr(sessions, '__iter__'):
            sessions = [sessions]

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