# Generated by Django 4.0.2 on 2022-05-10 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tour_app', '0024_alter_tour_country_alter_tour_region'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tour',
            name='region',
            field=models.CharField(choices=[('AFRICA', 'AFRICA'), ('EUROPE', 'EUROPE'), ('NORTH AMERICA', 'NORTH AMERICA'), ('SOUTH AMERICA', 'SOUTH AMERICA'), ('ANTARCTICA', 'ANTARCTICA'), ('AUSTRAILA', 'AUSTRAILA'), ('ASIAN-PACIFIC', 'ASIAN-PACIFIC'), ('MIDDLE EAST', 'MIDDLE EAST'), ('UNITED STATE', 'UNITED STATES')], max_length=100),
        ),
    ]
