from rest_framework import viewsets, permissions
from .serializers import ProfilesSerializer, UserFollowSerializer
from .models import profile, userfollow


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


class UserFollowViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserFollowSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.request.user.userfollows.all()
