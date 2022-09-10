from django.db import models
from django.contrib.auth.models import User
from activitylogs.models import activitylog
from django.db.models.signals import post_save


class profile(models.Model):
    user = models.ForeignKey(
        User, related_name="profiles", on_delete=models.CASCADE, null=True)
    wordslearned = models.IntegerField(default=0, null=True)
    lessonslearned = models.IntegerField(default=0, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    edited_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        db_table = "profile"

    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            profile.objects.create(user=instance)

    post_save.connect(create_user_profile, sender=User)


class userfollow(models.Model):
    owner = models.ForeignKey(
        User, related_name="userfollows", on_delete=models.CASCADE, null=True)
    following = models.IntegerField(null=True)
