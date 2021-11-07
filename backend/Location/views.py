from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.core import serializers

from .models import Location # <-- Here


class index(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]         # <-- And here

    def get(self, request):
        request.user.location.lat = 43.768970
        request.user.location.lon = -79.380150
        request.user.location.save()
        location = serializers.serialize('python', [request.user.location])[0]
        print(location)
        return Response(location)