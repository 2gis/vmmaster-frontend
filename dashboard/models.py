from __future__ import unicode_literals

from django.db import models
from django.conf import settings


class Session(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        blank=True,
        null=True,
        related_name="sessions",
        on_delete=models.SET_NULL,
    )
    status = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100, blank=True)
    time = models.FloatField(blank=True, null=True)
    error = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return "[" + str(self.id) + "] " + self.name

    class Meta:
        managed = False
        db_table = 'sessions'


class SessionLogStep(models.Model):
    id = models.IntegerField(primary_key=True)
    session = models.ForeignKey(Session, blank=True, null=True, related_name="session_steps")
    control_line = models.CharField(max_length=100, blank=True)
    body = models.CharField(max_length=100, blank=True)
    screenshot = models.CharField(max_length=100, blank=True)
    time = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vmmaster_log_steps'

    def __str__(self):
        return "[" + str(self.id) + "] " + self.control_line


class AgentLogStep(models.Model):
    id = models.IntegerField(primary_key=True)
    vmmaster_log_step = models.ForeignKey(SessionLogStep, blank=True, null=True, related_name="agent_steps")
    control_line = models.CharField(max_length=100, blank=True)
    body = models.CharField(max_length=100, blank=True)
    time = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'session_log_steps'

    def __str__(self):
        return "[" + str(self.id) + "] " + self.control_line