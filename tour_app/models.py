from django.db import models
from django.urls import reverse

REGION = [
    ('AFRICA', 'AFRICA'),
    ('UNITED STATE', 'UNITED STATES'),
    ('ASIAN-PACIFIC', 'ASIAN-PACIFIC'),
    ('EUROPE', 'EUROPE'),
    ('MIDDLE EAST', 'MIDDLE EAST')
    ('SOUTH AMERICA', 'SOUTH AMERICA')

]
TOURIST_TRAFFIC_RATE = [
    ('VERY HIGH', 'VERY HIGH'),
    ('HIGH', 'HIGH'),
    ('AVERAGE', 'AVERAGE'),
    ('LAW', 'LAW')
]
COUNTRIES_CHOICES = [
    ('EGYPT', 'EGYPT'),
    ('BOLIVIA', 'BILIVIA'),
    ('MOROCCO', 'MOROCCO'),
    ('SOUTH AFRICA', 'SOUTH AFRICA'),
    ('TUNISIA', 'TUNISIA'),
    ('ALGERIA', 'ALGERIA'),
    ('ZIMBABWE', 'ZIMBABWE'),
    ('MOZAMBIQUE', 'MOZAMBIQUE'),
    ('IVORY COST', 'IVORY COST'),
    ('KENYA', 'KENYA'),
    ('BOTSWANA', 'BOTSWANA'),
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
    ('TANZANIA', 'TANZANIA'),
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
    ('INDIA', 'INDIA'),
    ('BAHRAIN', 'BAHRAIN'),
    ('IRAQ', 'IRAQ'),
    ('NORWAY', 'NORWAY'),

]


class Category(models.Model):
    name = models.CharField(max_length=100, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'
        db_table = 'tours_categories'
        ordering = ['name']

    def __str__(self):
        return self.name


class FeaturedTourManager(models.Manager):
    # Get all the objects that are featured
    def get_queryset(self):
        return super().get_queryset().filter(is_featured=True)


class Tour(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(help_text='A unique prepopulated field for object url',
                            unique=True, max_length=50)
    region = models.CharField(max_length=100, choices=REGION, blank=False)
    country = models.CharField(max_length=100, choices=COUNTRIES_CHOICES, blank=False)
    location = models.CharField(max_length=100, blank=False)
    tourist_traffic_annually = models.CharField(max_length=100, choices=TOURIST_TRAFFIC_RATE,
                                                blank=True, default=False)
    image = models.ImageField(max_length=100, blank=True, default='destinations/default.png', upload_to='destinations')
    image_01 = models.ImageField(max_length=100, blank=True, default='destinations/default.png',
                                 upload_to='destinations')
    image_02 = models.ImageField(max_length=100, blank=True, default='destinations/default.png',
                                 upload_to='destinations')
    image_03 = models.ImageField(max_length=100, blank=True, default='destinations/default.png',
                                 upload_to='destinations')
    image_04 = models.ImageField(max_length=100, blank=True, default='destinations/default.png',
                                 upload_to='destinations')
    short_description = models.CharField(max_length=200, blank=True)
    long_description = models.TextField(blank=True)

    product_01 = models.CharField(max_length=100, null=True, blank=True)
    product_01_affiliate_link = models.URLField(max_length=2000, null=True, blank=True)

    product_02 = models.CharField(max_length=100, null=True, blank=True)
    product_02_affiliate_link = models.URLField(max_length=2000, null=True, blank=True)

    product_03 = models.CharField(max_length=100, null=True, blank=True)
    product_03_affiliate_link = models.URLField(max_length=2000, null=True, blank=True)

    product_04 = models.CharField(max_length=100, null=True, blank=True)
    product_04_affiliate_link = models.URLField(max_length=2000, null=True, blank=True)

    product_05 = models.CharField(max_length=100, null=True, blank=True)
    product_05_affiliate_link = models.URLField(max_length=2000, null=True, blank=True)

    product_06 = models.CharField(max_length=100, null=True, blank=True)
    product_06_affiliate_link = models.URLField(max_length=2000, null=True, blank=True)

    product_07 = models.CharField(max_length=100, null=True, blank=True)
    product_07_affiliate_link = models.URLField(max_length=2000, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_featured = models.BooleanField(default=False)
    is_popular = models.BooleanField(default=False)
    objects = models.Manager()
    featured = FeaturedTourManager()
    price = models.IntegerField(blank=False, default=0)  # This field is important for the cart feature
    numb_stars = models.PositiveSmallIntegerField(default=0, help_text='Value must not be grater than 5')
    category = models.ManyToManyField(Category)

    class Meta:
        db_table = 'tour_sites'
        verbose_name = 'tour'
        verbose_name_plural = 'tours'
        ordering = ['name']
        default_manager_name = 'objects'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('site_detail', kwargs={'pk': self.pk})
