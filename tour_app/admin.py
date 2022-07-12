from django.contrib import admin
from .models import Tour, Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    list_per_page = 10


class TourAdmin(admin.ModelAdmin):
    list_display = ('name', 'region', 'country',
                    'tourist_traffic_annually', 'numb_stars', 'created_at', 'updated_at')
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Category, CategoryAdmin)
admin.site.register(Tour, TourAdmin)
