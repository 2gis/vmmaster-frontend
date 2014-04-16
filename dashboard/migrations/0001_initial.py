# encoding: utf8
from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Session',
            fields=[
                (u'id', models.AutoField(verbose_name=u'ID', serialize=False, auto_created=True, primary_key=True)),
                ('session_name', models.CharField(max_length=200)),
                ('session_tiem', models.FloatField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Log_step',
            fields=[
                (u'id', models.AutoField(verbose_name=u'ID', serialize=False, auto_created=True, primary_key=True)),
                ('session_id', models.IntegerField()),
                ('control_line', models.CharField(max_length=200)),
                ('body', models.CharField(max_length=200)),
                ('screenshot', models.CharField(max_length=200)),
                ('time', models.FloatField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
