# Generated by Django 4.0.2 on 2022-03-19 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0016_alter_profile_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='comment_profile',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
