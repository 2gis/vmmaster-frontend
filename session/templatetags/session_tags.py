# -*- coding: utf-8 -*-

from django import template
from session.templatetags.session_filters import label_step, extract_label


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


@register.inclusion_tag('session/session_log_steps.html')
def show_session_log_steps(log_steps):
    return {'log_steps': log_steps}


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