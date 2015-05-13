# -*- coding: utf-8 -*-
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import login, authenticate, logout
from django.core.urlresolvers import reverse

from forms import VmmasterUserCreationForm
from forms import VmmasterUserAuthenticationForm

from api.views import generate_token


def register_view(request):
    if request.method == 'POST':
        form = VmmasterUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse("dashboard"))
    else:
        form = VmmasterUserCreationForm()

    return render(request, "registration/register.html", {
        'form': form,
    })  # TODO: replace with reverse


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse("dashboard"))
            else:
                form = VmmasterUserAuthenticationForm()
                return render(request, "login.html", {
                    'form': form,
                    'error': "Your account is locked"
                })  # TODO: replace with reverse
        else:
            form = VmmasterUserAuthenticationForm()
            return render(request, "login.html", {
                'form': form,
                'error': "Invalid login details. Try again"
            })  # TODO: replace with reverse
    else:
        form = VmmasterUserAuthenticationForm()

    return render(request, "login.html", {
        'form': form,
    })  # TODO: replace with reverse


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("dashboard"))


def get_new_token(request):
    if not request.user.is_anonymous():
        generate_token(request.user)
    return HttpResponseRedirect(reverse("dashboard"))