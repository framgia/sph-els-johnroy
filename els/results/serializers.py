from rest_framework import serializers
from results.models import result

# result Serializer


class ResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = result
        fields = '__all__'