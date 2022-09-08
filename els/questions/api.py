from unicodedata import category
from rest_framework import viewsets, permissions, serializers
from .serializers import QuestionsSerializer
from .models import question
from django.db.models import Q

class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = QuestionsSerializer
    queryset = question.objects.all()

    def perform_update(self, serializer):
        user = {self.request.user.id}
        serializer.save(userid=user)
