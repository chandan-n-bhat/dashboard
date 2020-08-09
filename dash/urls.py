from django.urls import path
from dash import views

app_name = 'dash'

urlpatterns = [
    path('', views.home, name='home'),
    path('api/v1/doughnutChart', views.doughnutChart, name='doughnutChart'),
    path('api/v1/lineChart', views.lineChart, name='lineChart'),
    path('api/v1/barGraph', views.barGraph, name='barGraph')
]
