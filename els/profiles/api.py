from rest_framework import viewsets, permissions
from .serializers import ProfilesSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfilesSerializer

    def get_queryset(self):
        return self.request.user.profiles.all()

    def perform_create(self, serializer):
        serializer.save()
