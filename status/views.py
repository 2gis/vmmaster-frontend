# -*- coding: utf-8 -*-
from django.shortcuts import render


def status_main(request):
    return render(request, 'status/status.html')
