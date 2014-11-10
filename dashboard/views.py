from django.shortcuts import render

from dashboard.models import Sessions
from api.views import get_platforms, get_queue, get_sessions


def dashboard(request):
    try:
        session_name = request.GET["q"]
    except:
        session_name = ''

    if not session_name:
        sessions = Sessions.objects.order_by('-time')
    else:
        sessions = Sessions.objects.filter(name__icontains=session_name)

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