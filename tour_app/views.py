from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.views.generic.base import TemplateView

class TourListView(LoginRequiredMixin,TemplateView):
    template_name = 'index.html'
    login_url ='/login/'
    redirect_fiedle_name = 'login'


    
