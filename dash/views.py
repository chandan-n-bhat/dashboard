from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.contrib.auth.decorators import login_required
from django.core.serializers import serialize


from dash.models import Billed

import json

# Create your views here.

@login_required(login_url='/accounts/login')
def home(request):

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

    context = {'row1':row1}
    return render(request, 'dash/home.html', context=context)


def doughnutData(request):

    if(request.method == 'GET'):

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

        doughnut_labels = list(units_count_doughnut.keys())
        doughnut_values = list(units_count_doughnut.values())
        # print(doughnut_values)
        # print(doughnut_labels)
    
        response = {
            'doughnut_labels_keys': doughnut_labels,
            'doughnut_values':doughnut_values
        }
        # print(response)
        return JsonResponse(response, status=200)

    return JsonResponse({"Error":"Invalid Method"}, status=405)

def dpc(request):

    if(request.method == 'GET'):

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

        doughnut_labels = list(units_count_doughnut.keys())
        doughnut_values = list(units_count_doughnut.values())
        # print(doughnut_values)
        # print(doughnut_labels)

        vendors = Billed.objects.values_list('vendor_name',flat=True)
        vendors_count_pie = dict()

        for j_ in vendors:
            if(j_ not in vendors_count_pie.keys()):
                vendors_count_pie[j_] = 0
            vendors_count_pie[j_] += 1

        pie_labels = list(vendors_count_pie.keys())
        pie_values = list(vendors_count_pie.values())

        response = {
            'doughnut_labels_keys': doughnut_labels,
            'doughnut_values': doughnut_values,
            'pie_labels': pie_labels,
            'pie_values': pie_values
        }
        # print(response)
        return JsonResponse(response, status=200)

    return JsonResponse({"Error":"Invalid Method"}, status=405)


def yearWiseSales(request):

    if(request.method =='GET'):

        # thisYear = request.GET['year']
        thisYear = '2018'
        print(thisYear)

        data = Billed.objects.values_list('billed_dt',flat=True)

        month_wise_count = {
            '01':0,
            '02':0,
            '03':0,
            '04':0,
            '05':0,
            '06':0,
            '07':0,
            '08':0,
            '09':0,
            '10':0,
            '11':0,
            '12':0,
        }

        for i in data:
            dt,tm = i.split(' ')
            year,month,day = dt.split('-')
            if(year == thisYear):
                #valid instance
                month_wise_count[month] += 1

        # print(month_wise_count)
        yws_labels = list(month_wise_count.keys())
        yws_values = list(month_wise_count.values())
        response = {
            'yws_labels': yws_labels,
            'yws_values': yws_values
        }

        return JsonResponse(response, status=200)

    return JsonResponse({"Error":"Invalid Method"}, status=200)