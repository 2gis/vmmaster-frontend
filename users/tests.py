# -*- coding: utf-8 -*-
from django.test import Client
from unittest import TestCase
from .models import VmmasterUser


class TestUserRegistration(TestCase):

    def setUp(self):
        self.client = Client()

    def test_positive_case(self):

        not_existing_username = 'TestRegPositive'
        nice_password = '123qwe'

        response = self.client.post(
            '/user/',
            {'username': not_existing_username,
             'password1': nice_password,
             'password2': nice_password}
        )

        self.assertEqual(response.status_code, 302)
        the_one = VmmasterUser.objects.get(username=not_existing_username)
        # Check attributes
        self.assertEqual(the_one.is_active, True)  # active by default
        self.assertEqual(the_one.is_staff, False)  # not admin group
        self.assertEqual(the_one.allowed_machines, 1)  # 1 vm allowed
        self.assertEqual(the_one.has_perm(), False)  # no permissions

        the_one.delete()

    def test_negative_case(self):

        not_existing_username = 'TestRegNegative'  # 1
        nice_password = '123qwe'
        existing_username = not_existing_username  # 2

        self.client.post(
            '/user/',
            {'username': not_existing_username,
             'password1': nice_password,
             'password2': nice_password}
        )

        create_the_same = self.client.post(
            '/user/',
            {'username': existing_username,
             'password1': nice_password,
             'password2': nice_password}
        )
        
        self.assertIn('errorlist', create_the_same.content)  # same page with error message "User exists"
        self.assertEqual(VmmasterUser.objects.filter(username=not_existing_username).count(), 1)

        VmmasterUser.objects.get(username=not_existing_username).delete()