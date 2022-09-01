from rest_framework import viewsets, permissions
from .serializers import ProfilesSerializer
from .models import profile

class UserListViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfilesSerializer
    queryset = profile.objects.all()

class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfilesSerializer

    def get_queryset(self):
        return self.request.user.profiles.all()
