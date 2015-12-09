# -*- coding: utf-8 -*-

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils import timezone
from uuid import uuid4


class VmmasterUserManager(BaseUserManager):
    def create_user(self, username, password, allowed_machines=1):
        u = VmmasterUser(
            username=username,
            allowed_machines=allowed_machines,
            date_joined=timezone.now(),
            last_login=timezone.now(),
        )
        u.generate_token()
        u.set_password(password)
        u.save(using=self._db)
        return u

    def create_superuser(self, username, password,):
        u = self.create_user(username, password,)
        u.group = VmmasterGroup.objects.get(name='admin')
        u.is_active = True
        u.save(using=self._db)
        return u


class VmmasterGroup(models.Model):
    name = models.CharField(db_column='name', max_length=30)

    class Meta:
        verbose_name = 'Group'
        managed = False
        db_table = 'user_groups'

    def __str__(self):
        return self.name


class VmmasterUser(AbstractBaseUser):
    username = models.CharField(db_column='username', max_length=20, unique=True)
    token = models.CharField(db_column='token', max_length=50, default=None)
    is_active = models.BooleanField(db_column='is_active', default=True)
    date_joined = models.DateTimeField(db_column='date_joined',
                                       default=timezone.now)
    group = models.ForeignKey('VmmasterGroup', default=1)
    allowed_machines = models.IntegerField(
        db_column='allowed_machines',
        verbose_name="Virtual machines limit",
        default=1
    )
    max_stored_sessions = models.IntegerField(
        db_column='max_stored_sessions',
        verbose_name="Max sessions to keep",
        default=100
    )

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ()

    def get_short_name(self):
        return self.username

    def get_full_name(self):
        return self.username

    @property
    def is_staff(self):
        if self.group.name == 'admin':
            return True
        else:
            return False

    def has_module_perms(self, app_label):
        if self.group.name == 'admin':
            return True
        else:
            return False

    def has_perm(self, obj=None):
        if self.group.name == 'admin':
            return True
        else:
            return False

    @property
    def is_superuser(self):
        if self.group.name == 'admin':
            return True
        else:
            return False

    objects = VmmasterUserManager()

    class Meta:
        verbose_name = 'User'
        managed = False
        db_table = 'users'

    def __str__(self):
        return self.username

    def __init__(self, *args, **kwargs):
        super(VmmasterUser, self).__init__(*args, **kwargs)
        if not self.token:
            self.generate_token()

    def generate_token(self):
        self.token = str(uuid4())
        return self.token

    def regenerate_token(self):
        self.generate_token()
        self.save()
        return self.token

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        super(VmmasterUser, self).save()
