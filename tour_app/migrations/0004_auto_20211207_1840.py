# Generated by Django 3.2.9 on 2021-12-07 18:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tour_app', '0003_auto_20211204_0825'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='tour',
            options={'ordering': ['-name'], 'verbose_name': 'tour', 'verbose_name_plural': 'tours'},
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='dispaly_image_01',
            new_name='image_01',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='dispaly_image_02',
            new_name='image_02',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='dispaly_image_03',
            new_name='image_03',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='dispaly_image_04',
            new_name='image_04',
        ),
    ]
