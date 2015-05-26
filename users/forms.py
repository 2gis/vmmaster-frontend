# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import VmmasterUser
from django.contrib.auth.forms import UserChangeForm, UserCreationForm, AuthenticationForm
from django.contrib.auth.forms import forms


class VmmasterUserCreationForm(UserCreationForm):

    class Meta:
        model = VmmasterUser
        fields = ("username",)

    def clean_username(self):
        username = self.cleaned_data["username"]
        try:
            VmmasterUser._default_manager.get(username=username)
        except VmmasterUser.DoesNotExist:
            return username
        raise forms.ValidationError(
            self.error_messages['duplicate_username'],
            code='duplicate_username',
        )


class VmmasterUserChangeForm(UserChangeForm):

    class Meta:
        model = VmmasterUser
        fields = ('username',)


class VmmasterUserAuthenticationForm(AuthenticationForm):

    class Meta:
        model = VmmasterUser
