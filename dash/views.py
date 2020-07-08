from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.decorators import login_required

from dash.models import Billed

# Create your views here.

@login_required(login_url='/accounts/login')
def home(request):

    units = Billed.objects.values_list('unit',flat=True)
    units_count_doughnut = dict()

    for i_ in units:
        j = "Unit "+i_
        if(j not in units_count_doughnut.keys()):
            units_count_doughnut[j] = 0
        units_count_doughnut[j] += 1

    # print(units_count_doughnut.keys())
    # print(units_count_doughnut.values())
    # print(units_count_doughnut)

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
        
    doughnut_labels = units_count_doughnut.keys()
    doughnut_values = units_count_doughnut.values()

    context = {'row1':row1,'doughnut_labels_keys':doughnut_labels,'doughnut_values':doughnut_values}
    return render(request, 'dash/home.html', context=context)