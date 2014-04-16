from __future__ import unicode_literals

from django.db import models


class DjangoMigrations(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'

    def __str__(self):
        return self.id + " " + self.name


class LogSteps(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    session_id = models.IntegerField(blank=True, null=True)
    control_line = models.CharField(max_length=100, blank=True)
    body = models.CharField(max_length=100, blank=True)
    screenshot = models.CharField(max_length=100, blank=True)
    time = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'log_steps'


class Sessions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=100, blank=True)
    time = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sessions'