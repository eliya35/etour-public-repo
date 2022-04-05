from csv import list_dialects
from pyexpat import model
from tabnanny import verbose
from django.contrib import admin
from .models import Comment, Rating, Profile
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = 'profiles'


class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('username', 'tour_site_id', 'body', 'parent_id','created_at')


class RatingAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'tour_site_id', 'num_stars')


# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)

admin.site.register(Comment, CommentAdmin)
admin.site.register(Rating, RatingAdmin)
