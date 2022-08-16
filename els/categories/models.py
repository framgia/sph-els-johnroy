from django.db import models
from django.contrib.auth.models import User


class category(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="categories", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)
