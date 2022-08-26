from django.db import models
from django.contrib.auth.models import User


class question(models.Model):
    name = models.CharField(max_length=200)
    choiceA = models.CharField(max_length=200, null=True)
    choiceB = models.CharField(max_length=200, null=True)
    choiceC = models.CharField(max_length=200, null=True)
    choiceD = models.CharField(max_length=200, null=True)
    correct = models.CharField(max_length=200, null=True)