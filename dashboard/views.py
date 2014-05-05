from django.shortcuts import render

from dashboard.models import Sessions


def index(request):
    sessions = Sessions.objects.order_by("time")[:20]
    print sessions
    context = {
        'sessions': sessions
    }
    return render(request, 'dashboard/dashboard.html', context)
