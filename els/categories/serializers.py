from rest_framework import serializers
from categories.models import category

# category Serializer


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = '__all__'
