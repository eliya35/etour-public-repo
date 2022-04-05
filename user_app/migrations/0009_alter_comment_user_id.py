# Generated by Django 3.2.9 on 2022-01-20 08:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('user_app', '0008_comment_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment_user_id', to='auth.user'),
        ),
    ]
