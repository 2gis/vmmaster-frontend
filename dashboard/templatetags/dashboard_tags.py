from django import template


register = template.Library()


@register.inclusion_tag('dashboard/sessions.html', takes_context=True)
def show_sessions(context, sessions):
    return {
        'sessions': sessions,
        'request': context.get('request')
    }

@register.inclusion_tag('dashboard/platforms.html')
def show_platforms(platforms):
    return {'platforms': platforms.get("platforms")}


@register.inclusion_tag('dashboard/queue.html')
def show_queue(queue):
    queue = [str(e) for e in queue.iteritems()]
    return {'queue': queue}