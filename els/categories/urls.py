from rest_framework import routers
from .api import CategoryViewSet

router = routers.DefaultRouter()
router.register('categories', CategoryViewSet, 'categories')

urlpatterns = router.urls
