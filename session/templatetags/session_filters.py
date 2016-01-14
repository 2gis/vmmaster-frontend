import json

from django import template
from django.utils.safestring import mark_safe

import pygments
from pygments.lexers import PythonLexer, JsonLexer
from pygments.formatters import HtmlFormatter


register = template.Library()



