from django.http import HttpResponse

from session.models import Sessions

def index(request):
    # latest_question_list = Sessions.objects.all()[:3]
    # output = ', '.join([p.question_text for p in latest_question_list])
    # return HttpResponse(output)
    return HttpResponse("Sessions page.")

def exact_session(request, session_name):
    return HttpResponse("You're looking at session with name %s." % session_name)