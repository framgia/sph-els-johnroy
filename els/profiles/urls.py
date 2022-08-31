from rest_framework import routers
from .api import ProfileViewSet, UserListViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('profiles', ProfileViewSet, 'profiles')
router.register('userlists', UserListViewSet, 'userlists')

urlpatterns = [
    path('', include(router.urls)),
]
