from pyexpat import model
from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from tour_app.models import Tour, Category
from user_app.models import Comment, Rating, Profile
from feedback_app.models import ContactUs, Suggestion
from django.contrib.auth.models import User


class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ('__all__')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'created_at', 'updated_at')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')


class ProfileSerializar(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('__all__')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('__all__')


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('__all__')
        

class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "date_joined",
        ]

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ('__all__')


class SuggestionSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Suggestion
        fields = ('__all__')