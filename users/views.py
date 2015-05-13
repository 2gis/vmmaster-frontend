from .forms import VmmasterUserCreationForm as UserCreationForm
from django.http import HttpResponseRedirect
from django.shortcuts import render


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect("/dashboard/")
            # TODO: redirect to personal page
    else:
        form = UserCreationForm()
    return render(request, "registration/register.html", {
        'form': form,
    })