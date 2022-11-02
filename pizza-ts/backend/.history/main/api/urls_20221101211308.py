from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('pizza', viewset=views.PizzaViewSet)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls'))
]