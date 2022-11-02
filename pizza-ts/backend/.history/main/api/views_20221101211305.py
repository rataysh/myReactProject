from django.shortcuts import render
from rest_framework import viewsets
from .models import Pizza
from .serializers import PizzaSerializer



class PizzaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Pizza
    serializer_class = PizzaSerializer