from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from django.contrib.auth import authenticate,login,logout

# decorators
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required

# forms
from accounts.forms import UserForm, ClientForm


# Create your views here.

def index(request):

    context = {}
    return render(request, 'accounts/index.html', context=context)

@never_cache
def userLogin(request):

    if(request.method == 'POST'):
        username = request.POST.get('username')
        password = request.POST.get('user_password')

        user = authenticate(username=username,password=password)

        if(user):
            if(user.is_active):
                login(request,user)
                return HttpResponseRedirect(reverse('dash:home'))
        else:
            print(' [info] Login Failed')
            print("Username {} and Password {}".format(username,password))
            return HttpResponse("Invalid Credentials")

    else:
        context = {}
        return render(request,'accounts/login.html',context=context)

@never_cache
@login_required(login_url='accounts/login/')
def userLogout(request):

    logout(request)
    return HttpResponseRedirect(reverse('index'))


def register(request):

    registered = False
    if(request.method == 'POST'):

        user_form = UserForm(data = request.POST)
        client_form = ClientForm(data = request.POST)

        if(user_form.is_valid() and client_form.is_valid()):

            user = user_form.save()
            user.set_password(user.password)
            user.save()

            client = client_form.save(commit=False)
            client.user = user
            client.save()

            registered = True

        else:
            print('[info] ',user_form.errors)        
            print('[info] ',client_form.errors)        
    
    else:
        user_form = UserForm()
        client_form = ClientForm()
        
    context = {'user_form':user_form, 'client_form':client_form, 'registered':registered}
    return render(request, 'accounts/register.html', context=context)