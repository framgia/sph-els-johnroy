from rest_framework import routers
from .api import categoryViewSet

router = routers.DefaultRouter()
router.register('api/categories', categoryViewSet, 'categories')

urlpatterns = router.urls