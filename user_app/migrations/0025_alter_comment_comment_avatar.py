# Generated by Django 4.0.2 on 2022-04-20 15:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0024_remove_comment_comment_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment_avatar',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user_app.profile', to_field='profile_avatar'),
        ),
    ]