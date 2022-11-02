from msilib.schema import Shortcut
from tokenize import blank_re
from django.db import models
from django.urls import reverse

class Pizza(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    img = models.ImageField(null=True, blank=True)
    price = models.FloatField()

    def __str__(self):
        return self.title
    

    
