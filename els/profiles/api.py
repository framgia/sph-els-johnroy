from rest_framework import viewsets, permissions
from .serializers import ProfilesSerializer
from .models import profile

class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfilesSerializer

    queryset = profile.objects.all()

    def perform_create(self, serializer):
        serializer.save()
