import json

from django import template
from django.utils.safestring import mark_safe

import pygments
from pygments.lexers import PythonLexer, JsonLexer
from pygments.formatters import HtmlFormatter

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
        code = ""
    else:
        code = str(code)

    if code.startswith("5"):
        return "error"
    else:
        return ""

@register.filter
def is_label_step(string):
    try:
        request = string.split(" ")
        return request[0] == "POST" and request[1].endswith("/vmmasterLabel")
    except:
        return False


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