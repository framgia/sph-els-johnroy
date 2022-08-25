from rest_framework import serializers
from .models import profile

# profile Serializer


class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = '__all__'