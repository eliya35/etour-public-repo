# Generated by Django 4.0.2 on 2022-03-05 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0013_profile_bio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(default='avatar_2x.png', null=True, upload_to=''),
        ),
    ]
