# -*- coding: utf-8 -*-

from django import template
from datetime import datetime
from session.templatetags.session_filters import label_step
from dashboard.models import SessionLogStep, SubStep
from django.conf import settings

import json
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


def format_error(error):
    session_error = None
    if error:
        session_error = error.replace(
            "\n    ", "<br />&nbsp;&nbsp;&nbsp;&nbsp;"
        )
        session_error = session_error.replace(
            "\n  ", "<br />&nbsp;&nbsp;"
        )
        session_error = session_error.replace("\n", "<br />")
    return session_error


def get_steps(session_id):
    return SessionLogStep.objects.filter(
        session=session_id).order_by('id').all()


def get_sub_steps(step_id):
    return SubStep.objects.filter(
        session_log_step=step_id).order_by('id').all()


@register.inclusion_tag('session/info_panel.html')
def show_session_header(session):
    status_message = None

    if session.endpoint_name:
        if session.status == "waiting":
            status_message = "Starting on %s..." % session.endpoint_name
        else:
            status_message = "Started on %s" % session.endpoint_name
    else:
        status_message = "Waiting for endpoint..."

    first_step = None
    browser_info = None
    steps = get_steps(session.id)
    if steps and len(steps) >= 2 and steps[0] and steps[1]:
        if "POST /wd/hub/session" in steps[0].control_line and \
                steps[1].control_line == "200":
            first_step = steps[0]
            try:
                browser_info = json.loads(steps[1].body).get("value", None)
            except:
                pass

    sub_steps = None
    if first_step:
        sub_steps = get_sub_steps(first_step.id)

    sys_info = None
    if sub_steps and len(sub_steps) >= 2 and sub_steps[0] and sub_steps[1]:
        if sub_steps[0].control_line == "GET /wd/hub/status" and \
                sub_steps[1].control_line == "200":
            try:
                sys_info = json.loads(sub_steps[1].body).get("value", None)
            except:
                pass

    platform_info = None
    java_info = None
    if sys_info:
        platform_info = sys_info.get("os", None)
        java_info = sys_info.get("java", None)

    platform = None
    if platform_info:
        platform = platform_info.get("name", "") + " " + \
            platform_info.get("version", "")

    java = None
    if java_info:
        java = "java " + java_info.get("version", "")

    browser = None
    if browser_info:
        browser = browser_info.get("browserName", "") + " " + \
            browser_info.get("version", "")

    if session.deleted:
        session_deleted = session.deleted.strftime('%H:%M:%S %d.%m.%Y')
    else:
        session_deleted = ""

    return {
        "status_message": status_message,
        "session_id": session.id,
        "session_name": session.name,
        "session_status": session.status,
        "session_error": format_error(session.error),
        "started": session.created.strftime('%H:%M:%S %d.%m.%Y'),
        "ended": session_deleted,
        "duration": session.duration,
        "username": session.user.username,
        "platform": platform,
        "java": java,
        "browser": browser,
    }


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


@register.inclusion_tag('session/vnc.html')
def show_vnc(session):
    return {
        'session': session,
        'proxy_vnc_host': settings.VMMASTER_API_URL.split("/")[2].split(":")[0]
    }


@register.inclusion_tag('session/screencast.html')
def show_screencast(session):
    return {'session': session}


@register.assignment_tag
def groupify(log_steps):
    steps_groups = {}
    current_label = 0

    for step in log_steps:
        if label_step(step.control_line) == 'label':
            current_label += 1

        if not steps_groups.get(current_label, None):
            steps_groups[current_label] = []

        steps_groups[current_label].append(step)

    return steps_groups