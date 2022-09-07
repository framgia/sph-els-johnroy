# Generated by Django 3.2.10 on 2022-09-04 15:57

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('questions', '0002_question_categoryid'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='userid',
            field=models.ManyToManyField(blank=True, related_name='usertaken', to=settings.AUTH_USER_MODEL),
        ),
    ]