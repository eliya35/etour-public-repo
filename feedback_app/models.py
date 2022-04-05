import email
from email import message
from re import T
from tabnanny import verbose
from django.db import models

COUNTRIES_CHOICES = [
    ('EGYPT', 'EGYPT'),
    ('MOROCCO', 'MOROCCO'),
    ('SOUTH AFRICA', 'SOUTH AFRICA'),
    ('TUNISIA', 'TUNISIA'),
    ('ALGERIA', 'ALGERIA'),
    ('ZIMBABWE', 'ZIMBABWE'),
    ('MOZAMBIQUE', 'MOZAMBIQUE'),
    ('IVORY COST', 'IVORY COST'),
    ('KENYA', 'KENYA'),
    ('BOSTSWANA', 'BOTSWANA'),
    ('USA', 'USA'),
    ('MEXICO', 'MEXICO'),
    ('CANADA', 'CANADA'),
    ('ARGENTINA', 'ARGENTINA'),
    ('DOMINICAN REPUBLIC', 'DOMINICAN REPUBLIC'),
    ('BRAILLE', 'BRAILLE'),
    ('CHILE', 'CHILE'),
    ('PERU', 'PERU'),
    ('CUBA', 'CUBA'),
    ('COLOMBIA', 'COLOMBIA'),
    ('CHAIN', 'CHAIN'),
    ('THAILAND', 'THAILAND'),
    ('JAPAN', 'JAPAN'),
    ('MALAYSIA', 'MALAYSIA'),
    ('HONG KONG', 'HONG KONG'),
    ('MACAU', 'MACAU'),
    ('VIETNAM', 'VIETNAM'),
    ('SOUTH KOREA', 'SOUTH KOREA'),
    ('INDONESIA', 'INDONESIA'),
    ('FRANCE', 'FRANCE'),
    ('SPAIN', 'SPAIN'),
    ('ITALY', 'ITALY'),
    ('TURKEY', 'TURKEY'),
    ('GERMANY', 'GERMANY'),
    ('UNITED KINGDOM', 'UNITED KINGDOM'),
    ('AUSTRALIA', 'AUSTRALIA'),
    ('GREECE', 'GREECE'),
    ('PORTUGOL', 'PORTUGOL'),
    ('RUSSIA', 'RUSSIA'),
    ('UNITED ARAB EMIRATES', 'UNITED ARAB EMIRATES'),
    ('SAUDI ARABIA', 'SAUDI ARABIA'),
    ('LEBANON', 'LEBANON'),
    ('ISRAEL', 'ISRAEL'),
    ('JORDAN', 'JORDAN'),
    ('QATAR', 'QATAR'),
    ('IRAN', 'IRAN'),
    ('BAHRAIN', 'BAHRAIN'),
    ('IRAQ', 'IRAQ'),

]

class ContactUs(models.Model):
    country = models.CharField(max_length=50, choices=COUNTRIES_CHOICES, blank=True, null = True)
    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    email = models.EmailField(blank=False)
    message = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name
    
    class Meta:
        verbose_name = 'contact_us'
        verbose_name_plural = 'contact_us'
        db_table = 'contact_us'

        
class Suggestion(models.Model):
    country = models.CharField(max_length=50, choices=COUNTRIES_CHOICES, blank=True, null=True)
    first_name = models.CharField(max_length=50,blank=False)
    last_name = models.CharField(max_length=50,blank=False)
    email = models.EmailField(blank=False)
    message = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.first_name
    
    class Meta:
        verbose_name = 'suggestion'
        verbose_name_plural = 'suggestions'
        db_table = 'suggestion'

