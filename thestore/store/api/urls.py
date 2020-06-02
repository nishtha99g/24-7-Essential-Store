from django.urls import path

from .views import ProductListview

urlpatterns = [
    path('',ProductListview.as_view()),
]