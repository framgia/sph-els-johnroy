from rest_framework import viewsets, permissions
from .serializers import QuestionsSerializer
from .models import question

class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = QuestionsSerializer
    queryset = question.objects.all()
