# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_auto_20150727_1725'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubStep',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('control_line', models.CharField(max_length=100, blank=True)),
                ('body', models.CharField(max_length=100, blank=True)),
                ('time_created', models.FloatField(null=True, blank=True)),
            ],
            options={
                'db_table': 'sub_steps',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.DeleteModel(
            name='AgentLogStep',
        ),
    ]