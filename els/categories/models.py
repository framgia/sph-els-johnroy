from django.db import models
from django.contrib.auth.models import User


class category(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="categories", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)
    times_taken = models.IntegerField(default=0, editable=False)


class question(models.Model):
    question = models.CharField(max_length=200)
    choiceA = models.CharField(max_length=200, null=True)
    choiceB = models.CharField(max_length=200, null=True)
    choiceC = models.CharField(max_length=200, null=True)
    choiceD = models.CharField(max_length=200, null=True)
    correct = models.CharField(max_length=200, null=True)
    categoryID = models.ForeignKey(
        category, on_delete=models.CASCADE,  related_name='questions', blank=True, null=True)

    def __str__(self):
        return self.question
