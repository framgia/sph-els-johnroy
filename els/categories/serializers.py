from rest_framework import serializers
from .models import category, question

# category Serializer


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = question
        fields = '__all__'