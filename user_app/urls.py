import imp
from django.urls import path
from . import views 
from .views import ChangePasswordView, ResetPasswordView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('register/',views.register_user, name='register-account'),
    path('login/',views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('my-account/change-username/', views.update_username, name='update_username'),
    path('my-account/change-password/', ChangePasswordView.as_view(), name='change_password'),
    path('password-reset/', ResetPasswordView.as_view(), name='password_reset'),
    path('password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name ='templates/password_reset_confirm.html'),name='password_reset_confirm'),
    path('password-reset-complete/',
     auth_views.PasswordResetCompleteView.as_view(template_name ='templates/password_reset_complete.html'),
     name='password_reset_complete'),
]