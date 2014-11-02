from django import template


register = template.Library()


@register.inclusion_tag('dashboard/sessions.html')
def show_sessions(sessions):
    return {'sessions': sessions}


@register.inclusion_tag('dashboard/platforms.html')
def show_platforms(platforms):
    return {'platforms': platforms.get("platforms")}


@register.inclusion_tag('dashboard/queue.html')
def show_queue(queue):
    queue = [str(e) for e in queue.iteritems()]
    return {'queue': queue}