from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist

from dashboard.models import Sessions


def index(request):
    try:
        session = request.GET["q"]
    except:
        session = ''

    if not session:
        sessions = Sessions.objects.order_by('time')[:20].reverse()
    else:
        try:
            sessions = Sessions.objects.get(name=session)
        except ObjectDoesNotExist:
            sessions = None

        if sessions and not hasattr(sessions, '__iter__'):
            sessions = [sessions]

    context = {
        'sessions': sessions
    }
    return render(request, 'dashboard/dashboard.html', context)