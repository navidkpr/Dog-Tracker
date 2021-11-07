from django.db import models
from django.db.models.fields.related import OneToOneField
from django.contrib.auth.models import User

class Location(models.Model):
    lat = models.FloatField(default="43.768970")
    lon = models.FloatField(default="-79.380150")
    user = OneToOneField(User, on_delete=models.CASCADE, null=True)
