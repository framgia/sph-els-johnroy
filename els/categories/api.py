from rest_framework import viewsets, permissions
from .serializers import CategoriesSerializer
from .models import category
class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CategoriesSerializer
    queryset = category.objects.all()
