# Generated by Django 3.2.10 on 2022-09-01 04:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0006_delete_question'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='category',
            name='times_taken',
        ),
    ]