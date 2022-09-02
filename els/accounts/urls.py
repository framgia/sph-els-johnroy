from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, UserViewSet
from knox import views as knox_views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserViewSet, 'users')

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('', include(router.urls)),
]
