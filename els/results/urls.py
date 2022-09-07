from rest_framework import routers
from .api import ResultViewSet

router = routers.DefaultRouter()
router.register('results', ResultViewSet, 'results')

urlpatterns = router.urls