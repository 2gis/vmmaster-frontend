from django import template


register = template.Library()


@register.inclusion_tag('dashboard/sessions.html')
def show_sessions(sessions):
    return {'sessions': sessions}