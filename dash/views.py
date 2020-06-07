from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='/accounts/login')
def home(request):

    row1 = [0,1,2,3]
    row3 = [0,1,2]

    context = {'row1':row1,'row3':row3}
    return render(request, 'dash/home.html', context=context)