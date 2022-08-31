from rest_framework import serializers
from .models import activitylog

# category Serializer


class ActivityLogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = activitylog
        depth = 1
        fields = '__all__'