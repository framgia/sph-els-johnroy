from rest_framework import viewsets, permissions
from .serializers import ActivityLogsSerializer
from .models import activitylog
class ActivityLogViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ActivityLogsSerializer
    queryset = activitylog.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)