from rest_framework import routers
from .api import CategoryViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('categories', CategoryViewSet, 'categories')

urlpatterns = [
    path('', include(router.urls)),
]