from django import template

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