from django.urls import path
from accounts import views

app_name = 'accounts'

urlpatterns = [
    path('login/', views.userLogin, name='login'),
    path('logout/', views.userLogout, name='logout'),
    path('register/', views.register, name='register'),
]
