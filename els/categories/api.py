from rest_framework import viewsets, permissions
from .serializers import CategoriesSerializer, QuestionSerializer
from .models import question
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_200_OK
)
# category Viewset


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CategoriesSerializer

    def get_queryset(self):
        return self.request.user.categories.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class QuestionViewSet(CreateAPIView):
    print('*****************')
    serializer_class = QuestionSerializer
    queryset = question.objects.all()
    print('*****************')
    def post(self, request):
        print('*****************')
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            question = serializer.create(request)
            if question:
                return Response(data={"data": question.id}, status=HTTP_201_CREATED)