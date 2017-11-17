# -*- coding: utf-8 -*-

from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import login, authenticate, logout
from django.core.urlresolvers import reverse

from forms import VmmasterUserCreationForm
from forms import VmmasterUserAuthenticationForm


def register_view(request):
    redirect_to = request.REQUEST.get('redirect_to')
    if request.method == 'POST':
        form = VmmasterUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            if redirect_to:
                redirect_to = redirect_to.replace("*", '?')
                return HttpResponseRedirect(redirect_to)
            else:
                return HttpResponseRedirect(reverse("dashboard"))
        else:
            if form.errors:
                return render(request, "registration/register.html", {
                    'form': form,
                    'request_path_for_redirect': redirect_to
                })  # TODO: replace with reverse
    else:
        form = VmmasterUserCreationForm()

    return render(request, "registration/register.html", {
        'form': form,
        'request_path_for_redirect': redirect_to
    })  # TODO: replace with reverse


def login_view(request):
    redirect_to = request.REQUEST.get('redirect_to')
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                if redirect_to:
                    return HttpResponseRedirect(redirect_to)
                else:
                    return HttpResponseRedirect(reverse("dashboard"))
            else:
                form = VmmasterUserAuthenticationForm()
                return render(request, "login.html", {
                    'form': form,
                    'error': "Your account is locked",
                    'request_path_for_redirect': redirect_to
                })  # TODO: replace with reverse
        else:
            form = VmmasterUserAuthenticationForm()
            return render(request, "login.html", {
                'form': form,
                'error': "Invalid login details. Try again",
                'request_path_for_redirect': redirect_to
            })  # TODO: replace with reverse
    else:
        form = VmmasterUserAuthenticationForm()

    return render(request, "login.html", {
        'form': form,
        'request_path_for_redirect': redirect_to
    })  # TODO: replace with reverse


def logout_view(request):
    logout(request)
    response = HttpResponseRedirect(reverse("dashboard"))
    response.delete_cookie('sessionid')
    return response
