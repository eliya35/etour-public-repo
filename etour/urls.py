"""etour URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.urls import path
from dotenv import load_dotenv

load_dotenv()

admin_site_url = str(os.getenv('ADMIN_SITE_URL'))
api_url = str(os.getenv('API_URL'))

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('', include('tour_app.urls')),
    path('', include('user_app.urls')),
    path(admin_site_url, admin.site.urls),
    path(api_url, include('api.urls')),
    path('featured/', TemplateView.as_view(template_name='index.html')),
    path('popular/', TemplateView.as_view(template_name='index.html')),
    path('category/<category>/', TemplateView.as_view(template_name='index.html')),
    path('region/Africa/', TemplateView.as_view(template_name='index.html'), name="africa_region"),
    path('region/Europe/', TemplateView.as_view(template_name='index.html'), name="europe_region"),
    path('region/North-america/', TemplateView.as_view(template_name='index.html'), name="north-america_region"),
    path('region/South-america/', TemplateView.as_view(template_name='index.html'), name="south-america_region"),
    path('region/Asian-pacific/', TemplateView.as_view(template_name='index.html'), name="asian-pacific_region"),
    path('region/Australia/', TemplateView.as_view(template_name='index.html'), name="australia_region"),
    # path('region/Antarctica/', TemplateView.as_view(template_name='index.html'), name="antarctic_region"),
    path('support/', TemplateView.as_view(template_name='index.html')),
    path('donate/', TemplateView.as_view(template_name='index.html')),
    path('contact/', TemplateView.as_view(template_name='index.html')),
    path('help/', TemplateView.as_view(template_name='index.html')),
    path('suggestion/', TemplateView.as_view(template_name='index.html')),
    path('privacy-policy/', TemplateView.as_view(template_name='index.html')),
    path('terms-and-condition/', TemplateView.as_view(template_name='index.html'), name='conditions-of-use'),
    path('about/', TemplateView.as_view(template_name='index.html')),
    path('faq/', TemplateView.as_view(template_name='index.html')),
    path('view/<int:id>/', TemplateView.as_view(template_name='index.html')),
    path('profile/', TemplateView.as_view(template_name='index.html'), name='profile'),
    path('login-required/', TemplateView.as_view(template_name='index.html')),
    path('profile/my-account/', TemplateView.as_view(template_name='index.html'), name='my_account'),
    path('coming-soon/', TemplateView.as_view(template_name='index.html'), name='coming_soon'),
    path('api-auth/', include('rest_framework.urls')),
]
