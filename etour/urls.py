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
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.urls import path

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('', include('tour_app.urls')),
    path('', include('user_app.urls')),
    path('RrV4Pkr3012wcRt6Mqhn5ivuLJDhNSsQGPheBW8JlmzOUnG9TZs1MtZUHupUQIbMivnS5y4gVgQCLC071MKe5Cte9AiOczCgsJWaZZXVbhv9nBYy1v2ApjbDK7rwfSX4dY7lFVPHR6EHiLoptA8yq20DbOka6I9R3NmWFwpUxuxBdcOlqfj3oYHKQjT3kJ5kscGPlGNg/', admin.site.urls),
    path('featured/', TemplateView.as_view(template_name='index.html')),
    path('popular/', TemplateView.as_view(template_name='index.html')),
    path('category/<category>/', TemplateView.as_view(template_name='index.html')),
    path('support/', TemplateView.as_view(template_name='index.html')),
    path('donate/', TemplateView.as_view(template_name='index.html')),
    path('contact/', TemplateView.as_view(template_name='index.html')),
    path('help/', TemplateView.as_view(template_name='index.html')),
    path('suggestion/', TemplateView.as_view(template_name='index.html')),
    path('privacy-policy/', TemplateView.as_view(template_name='index.html')),
    path('terms-and-condition/', TemplateView.as_view(template_name='index.html')),
    path('about/', TemplateView.as_view(template_name='index.html')),
    path('faq/', TemplateView.as_view(template_name='index.html')),
    path('view/<int:id>/', TemplateView.as_view(template_name='index.html')),
    path('profile/', TemplateView.as_view(template_name='index.html')),
    path('login-reqireid/', TemplateView.as_view(template_name='index.html')),
    path('profile/my-account/', TemplateView.as_view(template_name='index.html'), name='my_account'),
    path('comming-soon/', TemplateView.as_view(template_name='index.html'), name='comming_soon'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('api.urls')),
    # path('HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/', include('api.urls')),
]
