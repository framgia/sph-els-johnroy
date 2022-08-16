from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include(([
        path('', include('categories.urls')),
        path('', include('accounts.urls'))
    ]))),
]
