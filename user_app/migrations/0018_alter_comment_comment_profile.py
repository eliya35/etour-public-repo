# Generated by Django 4.0.2 on 2022-03-19 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0017_comment_comment_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment_profile',
            field=models.URLField(null=True),
        ),
    ]
