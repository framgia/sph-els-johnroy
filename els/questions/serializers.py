from rest_framework import serializers
from .models import question


class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = question
        fields = '__all__'