from translator.endpoints import TranslatorResource
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter(trailing_slash=True)

router.register('translator', TranslatorResource, 'translator')

urlpatterns = [
    path('api/', include(router.urls))
]
