# Generated by Django 3.2.9 on 2021-12-22 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tour_app', '0011_auto_20211216_1916'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
