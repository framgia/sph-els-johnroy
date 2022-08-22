from rest_framework import routers
from .api import QuestionViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('questions', QuestionViewSet, 'questions')

urlpatterns = [
    path('', include(router.urls)),
]