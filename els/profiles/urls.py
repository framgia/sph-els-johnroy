from rest_framework import routers
from .api import ProfileViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('profiles', ProfileViewSet, 'profiles')

urlpatterns = [
    path('', include(router.urls)),
]