from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json

# from . import searcher
from . import async_searcher


def mainview(request):
    return render(request, 'index.html',)


@csrf_exempt
def ajax(request):
    if request.method == 'POST':
        steamiddata = json.loads(request.body.decode("utf-8"))
        data = async_searcher.searcher(steamid=steamiddata['steamid'])
    return JsonResponse({'wishlist': data})


