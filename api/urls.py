from ast import arg
from urllib import request
from django.urls import path


from .views import TourListView, TourDetailView, FeturedListApiView, FeaturedDetailView, UserListView, UserDetailView, CommentDetailView, CommentListCreateView, RatingListView, RatingDetailView,CategoryTourListView,CurrentUserView,ContactUsListApiView,SuggestionListApiView, UserProfileDetailView, UserProfileUploadView, UserProfileListView
from . import views

urlpatterns = [
    path('', TourListView.as_view()), #everyoune
    path('<pk>', TourDetailView.as_view()), #everyone
    path('featured/', FeturedListApiView.as_view()), #everyone
    path('featured/<int:pk>/', FeaturedDetailView.as_view()), #everyone
    path('category/<category>/', CategoryTourListView.as_view()), #everyone
    path('users/', UserListView.as_view()), #staff_only
    path('user/current/', CurrentUserView.as_view()), # auth_user
    path('user/<int:pk>/', UserDetailView.as_view()), #auth_user
    path('user/profile/', UserProfileUploadView.as_view()),#auth_user
    path('users/profiles/', UserProfileListView.as_view()), #staf_only
    path('user/profile/<int:pk>/', UserProfileDetailView.as_view()), # auth_user
    path('comments/', CommentListCreateView.as_view()), # auth_user
    path('comments/<int:pk>/', CommentDetailView.as_view()), #auth_user
    path('ratings/', RatingListView.as_view()), #
    path('ratings/<int:pk>/', RatingDetailView.as_view()),#
    path('contactUs/', ContactUsListApiView.as_view()),# staff_only
    path('suggestions/', SuggestionListApiView.as_view()), # staff_only
    path('logout/', views.logout_user, name='api-logout'), #everyone
]
