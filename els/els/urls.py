from django.contrib import admin
from django.urls import path, include
from knox import views as knox_views

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include(([
        path('', include('categories.urls')),
        path('', include('accounts.urls')),
        path('admin/', admin.site.urls),
    ]))),
]
