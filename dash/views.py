from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='/accounts/login')
def home(request):

    row1 = [0,1,2,3]
    row3 = [0,1,2]

    current_user = request.user
    if(current_user.is_superuser):
        is_admin = "Yes"
    else:
        is_admin = "No"

    row1 = [
        {'header':'Current User','body':current_user.username,'icon_class':'fa fa-user'},
        {'header':'Last Login','body':current_user.last_login,'icon_class':'fa fa-clock-o'},
        {'header':'Date Joined','body':current_user.date_joined,'icon_class':'fa fa-calendar'},
        {'header':'Admin Access','body':is_admin,'icon_class':'fa fa-unlock-alt'}
        ]

    context = {'row1':row1,'row3':row3}
    return render(request, 'dash/home.html', context=context)