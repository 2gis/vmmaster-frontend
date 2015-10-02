# -*- coding: utf-8 -*-

from django import template
from endless_pagination.utils import get_page_numbers


register = template.Library()


@register.inclusion_tag('dashboard/hat.html')
def show_hat(user=None):
    if not user.is_anonymous():
        return {'username': user.get_username(), 'token': user.token}
    return {}


@register.inclusion_tag('dashboard/user_info.html')
def show_user_info(user=None):
    if user.is_authenticated() and not user.is_superuser:
        return {'token': user.token}
    return {}


@register.inclusion_tag('dashboard/sessions.html', takes_context=True)
def show_sessions(context, sessions):
    return {
        'sessions': sessions,
        'request': context.get('request')
    }


@register.inclusion_tag('dashboard/show_pagination.html', takes_context=True)
def show_pagination(context, pages):
    show = []
    for item in get_page_numbers(pages._page.number, len(pages)):
        if item is None:
            show.append(None)
        elif item == 'previous':
            show.append(pages.previous())
        elif item == 'next':
            show.append(pages.next())
        elif item == 'first':
            show.append(pages.first_as_arrow())
        elif item == 'last':
            show.append(pages.last_as_arrow())
        else:
            show.append(pages[item])

    return {'pages': show}


@register.inclusion_tag('dashboard/show_version.html')
def show_version(version):
    return {'version': version}

