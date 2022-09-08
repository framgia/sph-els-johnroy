from django.db import models
from django.contrib.auth.models import User


class result(models.Model):
    useranswer = models.CharField(max_length=100)
    correctanswer = models.CharField(max_length=100, unique=True)
    iscorrect = models.BooleanField(blank=True)
    owner = models.ForeignKey(
        User, related_name="results", on_delete=models.CASCADE, null=True)
    category = models.IntegerField(null=True)
    name = models.CharField(max_length=200, null=True)
    question = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)