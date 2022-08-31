from rest_framework import viewsets, permissions
from .serializers import ActivityLogsSerializer

class ActivityLogViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ActivityLogsSerializer

    def get_queryset(self):
        return self.request.user.activitylogs.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)