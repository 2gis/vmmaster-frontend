# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import VmmasterUser
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth.forms import forms


class VmmasterUserCreationForm(UserCreationForm):

    class Meta:
        model = VmmasterUser
        fields = ("username",)


class VmmasterUserChangeForm(UserChangeForm):

    class Meta:
        model = VmmasterUser
        fields = ("username",)