from django.urls import path
from dash import views

app_name = 'dash'

urlpatterns = [
    path('', views.home, name='home'),
    path('api/v1/dpc', views.dpc, name='doughnutPieChart'),
    path('api/v1/yearWiseSales', views.yearWiseSales, name='yearWiseSale')
]
