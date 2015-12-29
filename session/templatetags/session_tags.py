# -*- coding: utf-8 -*-

from django import template
from django.conf import settings

import urllib2

register = template.Library()


@register.inclusion_tag('session/screenshot.html')
def show_screenshot(step):
    return {'step': step}


@register.inclusion_tag('session/modal.html')
def show_modal_window(step):
    if isinstance(step, list):
        log_steps = [s.id for s in step if s.screenshot]
        screenshots_ids = [step[0].session_id, log_steps]
    else:
        try:
            screenshots_ids = [step.session_id, [step.id]]
        except AttributeError:
            screenshots_ids = []

    return {'screenshots_ids': screenshots_ids}


@register.inclusion_tag('session/screencast.html')
def show_screencast(session):
    return {'session': session}


@register.assignment_tag
def is_screencast_exist(host, session):
    req = urllib2.Request('http://%s/screenshot/%s/%s.webm' % (
        host.split(':')[0], session.id, session.id))
    try:
        urllib2.urlopen(req)
        return True
    except:
        return False


@register.inclusion_tag('session/screencast.html')
def show_screencast(session):
    return {'session': session}
