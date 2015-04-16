# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VmmasterUser',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(default=django.utils.timezone.now, verbose_name='last login')),
                ('username', models.CharField(unique=True, max_length=20, db_column=b'username')),
                ('is_active', models.BooleanField(default=False, db_column=b'is_active')),
                ('date_joined', models.DateTimeField(db_column=b'date_joined')),
                ('allowed_machines', models.IntegerField(null=True, verbose_name=b'Virtual machines limit', db_column=b'allowed_machines')),
            ],
            options={
                'verbose_name': 'User',
                'db_table': 'users',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='VmmasterGroup',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=30, db_column=b'name')),
            ],
            options={
                'verbose_name': 'Group',
                'db_table': 'user_groups',
                'managed': False,
            },
            bases=(models.Model,),
        ),
    ]
