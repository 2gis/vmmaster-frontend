from django import template
from django.utils.safestring import mark_safe

import pygments
from pygments.lexers import PythonLexer, JsonLexer
from pygments.formatters import HtmlFormatter

register = template.Library()


@register.filter
def truncate_string(string):
    max_size = 40
    if len(string) > max_size:
        string = string[:max_size/2] + "..." + string[-max_size/2:]
    else:
        pass

    return string


@register.filter
def control_line_status(control_line):
    code = control_line.split(" ")[1]
    if code.startswith("5"):
        return "_error"
    else:
        return ""


@register.filter
def spacify(string):
    return mark_safe(string.replace(" ", "&nbsp;"))


@register.filter
def highlight(text):
    formatter = HtmlFormatter()
    lexer = PythonLexer

    if text.startswith("{") and text.endswith("}"):
        lexer = JsonLexer

    code = pygments.highlight(text, lexer(), formatter)
    return mark_safe(code)