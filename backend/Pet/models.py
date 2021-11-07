from django.db import models
from django.db.models.fields.related import OneToOneField
from django.contrib.auth.models import User
from django.db.models.signals import post_save

class Location(models.Model):
    lat = models.FloatField(default=43.768970)
    lon = models.FloatField(default=-79.380150)

class Pet(models.Model):
    location = OneToOneField(Location, on_delete=models.CASCADE)
    user = OneToOneField(User, on_delete=models.CASCADE, null=True)

def initialize_pet(sender, instance, **kwargs):
    instance.pet = Pet()
    instance.pet.location = Location(lat=43.768970, lon=-79.380150)
    instance.pet.location.save()
    instance.pet.save()

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        location=Location.objects.create(lat=43.768970,lon=-79.380150)
        pet = Pet.objects.create(user=instance, location=location)

post_save.connect(create_user_profile, sender=User)