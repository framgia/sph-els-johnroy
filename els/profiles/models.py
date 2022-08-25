from django.db import models
from django.contrib.auth.models import User
from questions.models import question

class profile(models.Model):
    user = models.ForeignKey(
        User, related_name="profiles", on_delete=models.CASCADE, null=True)
    following = models.ManyToManyField(User, related_name='following', blank=True)
    questions = models.ManyToManyField(question, related_name='lessonlearned', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)
