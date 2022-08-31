
from rest_framework import routers
from .api import ActivityLogViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('activitylogs', ActivityLogViewSet, 'activitylogs')

urlpatterns = [
    path('', include(router.urls)),
]