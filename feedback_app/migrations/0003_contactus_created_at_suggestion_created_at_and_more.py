# Generated by Django 4.0.2 on 2022-02-16 13:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('feedback_app', '0002_alter_contactus_country_alter_suggestion_country'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactus',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='suggestion',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='contactus',
            name='country',
            field=models.CharField(blank=True, choices=[('EGYPT', 'EGYPT'), ('MOROCCO', 'MOROCCO'), ('SOUTH AFRICA', 'SOUTH AFRICA'), ('TUNISIA', 'TUNISIA'), ('ALGERIA', 'ALGERIA'), ('ZIMBABWE', 'ZIMBABWE'), ('MOZAMBIQUE', 'MOZAMBIQUE'), ('IVORY COST', 'IVORY COST'), ('KENYA', 'KENYA'), ('BOSTSWANA', 'BOTSWANA'), ('USA', 'USA'), ('MEXICO', 'MEXICO'), ('CANADA', 'CANADA'), ('ARGENTINA', 'ARGENTINA'), ('DOMINICAN REPUBLIC', 'DOMINICAN REPUBLIC'), ('BRAILLE', 'BRAILLE'), ('CHILE', 'CHILE'), ('PERU', 'PERU'), ('CUBA', 'CUBA'), ('COLOMBIA', 'COLOMBIA'), ('CHAIN', 'CHAIN'), ('THAILAND', 'THAILAND'), ('JAPAN', 'JAPAN'), ('MALAYSIA', 'MALAYSIA'), ('HONG KONG', 'HONG KONG'), ('MACAU', 'MACAU'), ('VIETNAM', 'VIETNAM'), ('SOUTH KOREA', 'SOUTH KOREA'), ('INDONESIA', 'INDONESIA'), ('FRANCE', 'FRANCE'), ('SPAIN', 'SPAIN'), ('ITALY', 'ITALY'), ('TURKEY', 'TURKEY'), ('GERMANY', 'GERMANY'), ('UNITED KINGDOM', 'UNITED KINGDOM'), ('AUSTRALIA', 'AUSTRALIA'), ('GREECE', 'GREECE'), ('PORTUGOL', 'PORTUGOL'), ('RUSSIA', 'RUSSIA'), ('UNITED ARAB EMIRATES', 'UNITED ARAB EMIRATES'), ('SAUDI ARABIA', 'SAUDI ARABIA'), ('LEBANON', 'LEBANON'), ('ISRAEL', 'ISRAEL'), ('JORDAN', 'JORDAN'), ('QATAR', 'QATAR'), ('IRAN', 'IRAN'), ('BAHRAIN', 'BAHRAIN'), ('IRAQ', 'IRAQ')], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='suggestion',
            name='country',
            field=models.CharField(blank=True, choices=[('EGYPT', 'EGYPT'), ('MOROCCO', 'MOROCCO'), ('SOUTH AFRICA', 'SOUTH AFRICA'), ('TUNISIA', 'TUNISIA'), ('ALGERIA', 'ALGERIA'), ('ZIMBABWE', 'ZIMBABWE'), ('MOZAMBIQUE', 'MOZAMBIQUE'), ('IVORY COST', 'IVORY COST'), ('KENYA', 'KENYA'), ('BOSTSWANA', 'BOTSWANA'), ('USA', 'USA'), ('MEXICO', 'MEXICO'), ('CANADA', 'CANADA'), ('ARGENTINA', 'ARGENTINA'), ('DOMINICAN REPUBLIC', 'DOMINICAN REPUBLIC'), ('BRAILLE', 'BRAILLE'), ('CHILE', 'CHILE'), ('PERU', 'PERU'), ('CUBA', 'CUBA'), ('COLOMBIA', 'COLOMBIA'), ('CHAIN', 'CHAIN'), ('THAILAND', 'THAILAND'), ('JAPAN', 'JAPAN'), ('MALAYSIA', 'MALAYSIA'), ('HONG KONG', 'HONG KONG'), ('MACAU', 'MACAU'), ('VIETNAM', 'VIETNAM'), ('SOUTH KOREA', 'SOUTH KOREA'), ('INDONESIA', 'INDONESIA'), ('FRANCE', 'FRANCE'), ('SPAIN', 'SPAIN'), ('ITALY', 'ITALY'), ('TURKEY', 'TURKEY'), ('GERMANY', 'GERMANY'), ('UNITED KINGDOM', 'UNITED KINGDOM'), ('AUSTRALIA', 'AUSTRALIA'), ('GREECE', 'GREECE'), ('PORTUGOL', 'PORTUGOL'), ('RUSSIA', 'RUSSIA'), ('UNITED ARAB EMIRATES', 'UNITED ARAB EMIRATES'), ('SAUDI ARABIA', 'SAUDI ARABIA'), ('LEBANON', 'LEBANON'), ('ISRAEL', 'ISRAEL'), ('JORDAN', 'JORDAN'), ('QATAR', 'QATAR'), ('IRAN', 'IRAN'), ('BAHRAIN', 'BAHRAIN'), ('IRAQ', 'IRAQ')], max_length=50, null=True),
        ),
    ]
