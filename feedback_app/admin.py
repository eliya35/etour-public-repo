from django.contrib import admin

from .models import ContactUs, Suggestion

class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('first_name','last_name','country','message', 'created_at')


class SuggestionAdmin(admin.ModelAdmin):
    list_display = ('first_name','last_name','country','message', 'created_at')


admin.site.register(ContactUs, ContactUsAdmin)
admin.site.register(Suggestion, SuggestionAdmin)