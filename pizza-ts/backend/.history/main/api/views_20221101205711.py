from django.shortcuts import render
from rest_framework import viewsets
from .models import Pizza
# Create your views here.


class PizzaView(viewsets.ReadOnlyModelViewSet):
    queryset = Pizza
    