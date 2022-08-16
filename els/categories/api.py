from categories.models import category
from rest_framework import viewsets, permissions
from .serializers import CategoriesSerializer

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
