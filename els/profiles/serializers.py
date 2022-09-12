from distutils import dep_util
from rest_framework import serializers
from .models import profile, userfollow

# profile Serializer


class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        depth = 1
        fields = '__all__' 


class UserFollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = userfollow
        depth = 1
        fields = '__all__' 
