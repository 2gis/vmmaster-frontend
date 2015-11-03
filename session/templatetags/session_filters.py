import json

from django import template
from django.utils.safestring import mark_safe

import pygments
from pygments.lexers import PythonLexer, JsonLexer
from pygments.formatters import HtmlFormatter

from dashboard.models import SubStep

register = template.Library()


@register.filter
def truncate_string(string, max_size=40):
    if len(string) > max_size:
        string = string[:max_size/2] + "..." + string[-max_size/2:]
    else:
        pass

    return string


@register.filter
def code_status(code=None):
    if code is None:
        code = "unknown"
    else:
        code = str(code)

    if code.startswith("5"):
        return "error"
    elif code.startswith("2"):
        return "success"
    else:
        return "unknown"


@register.filter
def label_step(string):
    label_class = ""
    try:
        request = string.split(" ")
        if request[0] == "POST" and request[1].endswith("/vmmasterLabel"):
            label_class = 'label'
    except:
        pass
    return label_class


@register.filter
def extract_label(string):
    try:
        body = json.loads(string)
        return body.get("label", string)
    except:
        return string


@register.filter
def spacify(string):
    return mark_safe(string.replace(" ", "&nbsp;"))


@register.filter
def pretty_json(body):
    try:
        body = body.replace("\\n", "\n")
        data = json.loads(body)
        return json.dumps(data, indent=4)
    except:
        return body


@register.filter
def highlight(text):
    formatter = HtmlFormatter
    lexer = PythonLexer

    if text.startswith("{") and text.endswith("}"):
        lexer = JsonLexer

    code = pygments.highlight(text, lexer(), formatter())
    return mark_safe(code)


@register.filter
def extract_url(string):
    return string.split(" ")[1]


@register.filter
def got_sub_steps(step):
    return SubStep.objects.filter(session_log_step=step).count() > 0


@register.filter
def text_status(status):
    if status == 'waiting':
        return 'default'
    if status == 'running':
        return 'warning'
    if status == 'failed':
        return 'danger'
    else:
        return 'success'

