from django.http import HttpResponse
from django.shortcuts import render

from dashboard.models import Sessions


def index(request):
    sessions = Sessions.objects.all()[:3]
    # output = ', '.join([p.question_text for p in latest_question_list])
    context = {
        'sessions': sessions
    }
    return render(request, 'dashboard/dashboard.html', context)
