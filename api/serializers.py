from rest_framework import serializers
from dashboard.models import Session, SessionLogStep, SubStep


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
            'deleted',
            'modified',
            'take_screencast',
            'duration',
            'username',
        )


class SessionStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionLogStep
        fields = (
            'id',
            'control_line',
            'body',
            'screenshot',
            'created',
            'response',
            'duration',
            'substeps',
        )


class SessionSubStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubStep
        fields = (
            'id',
            'control_line',
            'body',
            'created',
            'response',
            'duration',
        )
