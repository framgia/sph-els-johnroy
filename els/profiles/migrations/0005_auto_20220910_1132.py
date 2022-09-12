# Generated by Django 3.2.10 on 2022-09-10 03:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('profiles', '0004_alter_profile_following'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='following',
        ),
        migrations.CreateModel(
            name='userfollow',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.IntegerField(null=True)),
                ('following', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userfollows', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
