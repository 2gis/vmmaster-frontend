from django import template


register = template.Library()


@register.inclusion_tag('session/screenshot.html')
def show_screenshot(step):
    return {'step': step}

@register.inclusion_tag('session/log_steps.html')
def show_log_steps(log_steps):
    return {'log_steps': log_steps}