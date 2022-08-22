from rest_framework import viewsets, permissions
from .serializers import QuestionsSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = QuestionsSerializer

    def get_queryset(self):
        return self.request.user.questions.all()

    def perform_create(self, serializer):
        serializer.save()
