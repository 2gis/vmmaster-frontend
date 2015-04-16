# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AgentLogStep',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('control_line', models.CharField(max_length=100, blank=True)),
                ('body', models.CharField(max_length=100, blank=True)),
                ('time', models.FloatField(null=True, blank=True)),
            ],
            options={
                'db_table': 'session_log_steps',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('status', models.CharField(max_length=100, blank=True)),
                ('name', models.CharField(max_length=100, blank=True)),
                ('time', models.FloatField(null=True, blank=True)),
                ('error', models.CharField(max_length=100, blank=True)),
            ],
            options={
                'db_table': 'sessions',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='SessionLogStep',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('control_line', models.CharField(max_length=100, blank=True)),
                ('body', models.CharField(max_length=100, blank=True)),
                ('screenshot', models.CharField(max_length=100, blank=True)),
                ('time', models.FloatField(null=True, blank=True)),
            ],
            options={
                'db_table': 'vmmaster_log_steps',
                'managed': False,
            },
            bases=(models.Model,),
        ),
    ]
