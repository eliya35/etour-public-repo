from django.urls import path

from .views import TourListView, TourDetailView, FeaturedListApiView, FeaturedDetailView, UserListView, UserDetailView, \
    CommentDetailView, CommentListCreateView, RatingListView, RatingDetailView, CategoryTourListView, CurrentUserView, \
    ContactUsListApiView, SuggestionListApiView, UserProfileDetailView, UserProfileUploadView, UserProfileListView
from . import views

urlpatterns = [
    path('', TourListView.as_view()),
    path('<pk>', TourDetailView.as_view()),
    path('featured/', FeaturedListApiView.as_view()),
    path('featured/<int:pk>/', FeaturedDetailView.as_view()),
    path('category/<category>/', CategoryTourListView.as_view()),
    path('users/', UserListView.as_view()),
    path('user/current/', CurrentUserView.as_view()),
    path('user/<int:pk>/', UserDetailView.as_view()),
    path('user/profile/', UserProfileUploadView.as_view()),
    path('users/profiles/', UserProfileListView.as_view()),
    path('user/profile/<int:pk>/', UserProfileDetailView.as_view()),
    path('contactUs/', ContactUsListApiView.as_view()),
    path('suggestions/', SuggestionListApiView.as_view()),
    path('logout/', views.logout_user, name='api-logout'),
    # path('comments/', CommentListCreateView.as_view()),
    # path('comments/<int:pk>/', CommentDetailView.as_view()),
    # path('ratings/', RatingListView.as_view()),
    # path('ratings/<int:pk>/', RatingDetailView.as_view()),
]