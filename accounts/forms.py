from django import forms
from django.contrib.auth.models import User
from accounts.models import Client


class UserForm(forms.ModelForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))

    class Meta():
        model = User
        fields = ('username','password')


class ClientForm(forms.ModelForm):

    email = forms.EmailField(widget=forms.EmailInput(attrs={'class':'form-control'}))

    class Meta():
        model = Client
        fields = ('email',)
