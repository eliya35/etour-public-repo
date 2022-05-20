from multiprocessing import context
from pyexpat import model
from unicodedata import category
from urllib import request, response
from webbrowser import get
from tour_app.models import Category, Tour
from user_app.models import Comment, Rating, Profile
from django.contrib.auth.models import User
from feedback_app.models import ContactUs, Suggestion
from django.shortcuts import get_object_or_404
from rest_framework import generics, viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication,SessionAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django.views.generic import DetailView

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.http import HttpResponse

from .serializer import ProfileSerializar, TourSerializer, CategorySerializer, UserSerializer, CommentSerializer, RatingSerializer, CurrentUserSerializer, ContactUsSerializer,SuggestionSeralizer

"""
The ListView classes are used to retrive all objects in a model, while  the 
DetailViwe classes are used to retrive a unique object with the given pk on the
url wheraes the generic.ListCreateAPI is used for both creating and viewing objects.

"""


class TourListView(generics.ListAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer


class TourDetailView(generics.RetrieveAPIView):
    queryset = Tour.objects.filter()
    serializer_class = TourSerializer


class FeturedListApiView(generics.ListAPIView):
    queryset = Tour.featured.all()
    serializer_class = TourSerializer


class FeaturedDetailView(generics.RetrieveAPIView):
    queryset = Tour.featured.filter()
    serializer_class = TourSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(generics.RetrieveAPIView):
    queryset = Category.objects.filter()
    serializer_class = CategorySerializer
    

# Handles retriving of objects in a category
class CategoryTourListView(generics.ListAPIView):
    serializer_class = TourSerializer
    
    def get_queryset(self):
        self.category = get_object_or_404(Category, name=self.kwargs['category'])
        return Tour.objects.filter(category= self.category)


class UserListView(generics.ListAPIView):
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated, IsAdminUser)
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated, )
    queryset = User.objects.filter()
    serializer_class = UserSerializer


# Get the curent logged in user credentials and send em to the api
class CurrentUserView(APIView):
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated,)
    

    def get (self, request):
        serializer_class = CurrentUserSerializer(request.user)
        return Response (serializer_class.data)


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    parse_classes = [MultiPartParser, FormParser]

    queryset = Profile.objects.filter()
    serializer_class = ProfileSerializar


class UserProfileUploadView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parse_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = ProfileSerializar(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfileListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, IsAdminUser)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializar


# class for both comment POST and GET request
class CommentListCreateView(generics.ListCreateAPIView):
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# Handles retriving and deleting of comments
class CommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Comment.objects.filter()
    serializer_class = CommentSerializer

class RatingListView(generics.ListAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

class RatingDetailView(DetailView):
    queryset = Rating.objects.filter()
    serializer_class = RatingSerializer

class ContactUsListApiView(generics.ListCreateAPIView):
    # permission_classes = (IsAuthenticated, IsAdminUser)
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer


class SuggestionListApiView(generics.ListCreateAPIView):
    # permission_classes = (IsAuthenticated, IsAdminUser)
    queryset = Suggestion.objects.all()
    serializer_class = SuggestionSeralizer


def logout_user(request):
    logout(request)
    return redirect('home')

