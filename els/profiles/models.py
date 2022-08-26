from django.db import models
from django.contrib.auth.models import User
from questions.models import question
from django.db.models.signals import post_save

class profile(models.Model):
    user = models.ForeignKey(
        User, related_name="profiles", on_delete=models.CASCADE, null=True)
    following = models.ManyToManyField(User, related_name='following', blank=True, null=True)
    questions = models.ManyToManyField(question, related_name='lessonlearned', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    edited_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        db_table = "profile"

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        profile.objects.create(user=instance)

post_save.connect(create_user_profile, sender=User)