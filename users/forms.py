# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import VmmasterUser
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth.forms import forms


class AdminUserCreationForm(UserCreationForm):

    class Meta:
        model = VmmasterUser
        fields = ('username',)

    def clean_username(self):
        username = self.cleaned_data["username"]
        try:
            VmmasterUser._default_manager.get(username=username)
        except VmmasterUser.DoesNotExist:
            return username
        raise forms.ValidationError(self.error_messages['duplicate_username'])


class AdminUserChangeForm(UserChangeForm):

    class Meta:
        model = VmmasterUser
        fields = ('username',)