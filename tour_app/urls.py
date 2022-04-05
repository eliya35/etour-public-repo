from django.conf.urls.static import static
from etour import settings
from django.urls import path
from . import views
# from django.views.generic import TemplateView


urlpatterns = [
    # path('mylist/', views.tour_list, name='tour_list')
    path('mylist/', views.TourListView.as_view(), name='tour_list'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
