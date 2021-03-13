from django.urls import path, include
from .views import Home, companies_list

urlpatterns = [
    path('', Home),
    path('api/', companies_list),
]