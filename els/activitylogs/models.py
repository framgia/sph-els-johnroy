
from django.db import models
from django.contrib.auth.models import User


class activitylog(models.Model):
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="activitylogs", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)