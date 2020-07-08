from django.urls import path
from dash import views

app_name = 'dash'

urlpatterns = [
    path('', views.home, name='home'),
    path('api/v1/doughnutdata', views.doughnutData, name='doughnut')
]
