from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

import json

from pricer import async_searcher



class apiTest(APIView):
    def get(self, request):
        return Response({'123':'321'})


class apiGetWishlist(APIView):
    def post(self, request):
        if request.method == 'POST':
            steamiddata = json.loads(request.body.decode("utf-8"))
            data = async_searcher.searcher(steamid=steamiddata['steamid'])
        return JsonResponse({'wishlist': data})