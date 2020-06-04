from django.urls import path
from . import views

app_name = 'store'

urlpatterns = [
    path('', views.category_list, name='category_list'),
    path('<slug:category_slug>/', views.product_list,name='product_list_by_category'),
    path('<int:id>/', views.product_detail,name='product_detail'),
]