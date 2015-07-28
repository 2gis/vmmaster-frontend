# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='VirtualMachine',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=100, blank=True)),
                ('ip', models.CharField(max_length=100, blank=True)),
                ('mac', models.CharField(max_length=100, blank=True)),
            ],
            options={
                'db_table': 'virtual_machines',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.AlterModelTable(
            name='agentlogstep',
            table='agent_log_steps',
        ),
        migrations.AlterModelTable(
            name='sessionlogstep',
            table='session_log_steps',
        ),
    ]
