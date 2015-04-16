# -*- coding: utf-8 -*-
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _
from .models import VmmasterUser, VmmasterGroup
from .forms import AdminUserCreationForm, AdminUserChangeForm

admin.site.unregister(Group)


class UserInline(admin.TabularInline):

    model = VmmasterUser
    fk_name = 'group'

    list_display = ('username', 'allowed_machines', 'is_active', 'date_joined',)
    fieldsets = [(None, {'fields': ('username', 'allowed_machines', 'is_active',)})]


@admin.register(VmmasterGroup)
class VmmasterGroupAdmin(admin.ModelAdmin):

    inlines = [
        UserInline,
    ]


@admin.register(VmmasterUser)
class VmmasterUserAdmin(UserAdmin):
    add_form = AdminUserCreationForm
    form = AdminUserChangeForm

    # 'List of users' form fields
    list_display = ('username', 'group', 'allowed_machines', 'is_active', 'date_joined', 'last_login')
    search_fields = ('username',)
    readonly_fields = ['date_joined', 'last_login']
    ordering = ('id',)

    # 'Edit user' form fields
    fieldsets = (
        (None, {'fields': ('username', 'password',)}),
        (None, {'fields': ('is_active',)}),
        (_('Vmmaster'), {'fields': ('group', 'allowed_machines',)}),
        (None, {'fields': ('date_joined', 'last_login',)}),
    )

    # 'Add new user' form fields
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2',)
        }),
        (None, {'fields': ('is_active',)}),
        (_('Vmmaster'), {'fields': ('group', 'allowed_machines',)}),
    )

    # FIXME: ref links to 'groups', 'user_permissions', 'is_staff', 'is_superuser'
    filter_horizontal = ()
    list_filter = ('is_active', 'group')
