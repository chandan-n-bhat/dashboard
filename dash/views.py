from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.contrib.auth.decorators import login_required
from django.core.serializers import serialize


from dash.models import Billed
from django.db.models import Count


import json
import operator

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

    data_items = Billed.objects.values_list('item_name',flat=True)
    dict_items = dict()

    for i_ in data_items:
        if(i_ not in dict_items.keys()):
            dict_items[i_] = 0
        dict_items[i_] += 1
    top = dict(sorted(dict_items.items(), key=operator.itemgetter(1), reverse=True)[:5])

    context = {
        'row1':row1,
        'top':top
    }
    return render(request, 'dash/home.html', context=context)


def lineChart(request):

    if(request.method =='GET'):

        thisYear = request.GET['year']
        prevYear = str(int(thisYear)-1)

        data = Billed.objects.values_list('billed_dt',flat=True)

        current_month = {
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

        prev_month = {
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
            try:
                dt,tm = i.split(' ')
                year,month,day = dt.split('-')
            except:
                print(i)
                continue
            
            if(year == thisYear):
                #valid instance
                current_month[month] += 1
            
            elif(year == prevYear):
                #valid prev instance
                prev_month[month] += 1

        cur_line_labels = list(current_month.keys())
        cur_line_values = list(current_month.values())
        # prev_line_labels = list(prev_month_wise_count.keys())   not needed as cur labels are same as prev labels
        prev_line_values = list(prev_month.values())

        response = {
            'cur_labels': cur_line_labels,
            'cur_values': cur_line_values,
            # 'prev_labels': prev_line_labels,      not needed as cur labels are same as prev labels
            'prev_values': prev_line_values
        }

        return JsonResponse(response, status=200)

    return JsonResponse({"Error":"Invalid Method"}, status=405)


def barGraph(request):

    if(request.method == 'GET'):

        data = Billed.objects.values_list('vendor_name',flat=True)
        data_dict = dict()

        for i_ in data:
            if(i_ not in data_dict.keys()):
                data_dict[i_] = 0
            data_dict[i_] += 1

        bar_labels = list(data_dict.keys())
        bar_values = list(data_dict.values())

        response = {
            'bar_labels': bar_labels,
            'bar_values': bar_values,
        }
        return JsonResponse(response, status=200)

    return JsonResponse({"Error":"Invalid Method"}, status=405)


def doughnutChart(request):

    if(request.method == 'GET'):

        units = Billed.objects.values_list('unit',flat=True)
        units_doughnut = dict()

        for i_ in units:
            if(i_ == "NULL"):
                continue #few NULL values thus skipping those
            j = "Unit "+i_
            if(j not in units_doughnut.keys()):
                units_doughnut[j] = 0
            units_doughnut[j] += 1

        doughnut_labels = list(units_doughnut.keys())
        doughnut_values = list(units_doughnut.values())

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
            'pie_values': pie_values,
        }
        return JsonResponse(response, status=200)

    return JsonResponse({"Error":"Invalid Method"}, status=405)




'''

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


'''