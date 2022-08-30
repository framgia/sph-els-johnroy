from distutils import dep_util
from rest_framework import serializers
from .models import profile

# profile Serializer


class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        depth = 1
        fields = '__all__' 
