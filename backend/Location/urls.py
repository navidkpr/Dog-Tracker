from django.urls import path
from django.conf.urls import include
from .views import index

urlpatterns = [
    path('', index.as_view()),
]