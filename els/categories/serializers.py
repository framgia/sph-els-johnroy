from rest_framework import serializers
from categories.models import category 

# category Serializer
class categorieserializer(serializers.ModelSerializer):
  class Meta:
    model = category 
    fields = '__all__'