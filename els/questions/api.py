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
    def get_queryset(self):
        queryset = question.objects.filter(~Q(userid=self.request.user.id))
        return queryset

    def perform_update(self, serializer):
        user = {self.request.user.id}
        serializer.save(userid=user)
