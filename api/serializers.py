from rest_framework import serializers
from dashboard.models import Session


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = (
            'id',
            'name',
            'status',
            'error',
            'closed',
            'dc',
            'platform',
            'timeouted',
            'selenium_session',
            'endpoint_ip',
            'endpoint_name',
            'created',
            'modified',
            'take_screencast'
        )