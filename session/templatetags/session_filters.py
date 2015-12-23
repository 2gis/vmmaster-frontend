import json

from django import template
from django.utils.safestring import mark_safe

import pygments
from pygments.lexers import PythonLexer, JsonLexer
from pygments.formatters import HtmlFormatter


register = template.Library()


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


