from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'store'

urlpatterns = [
    path('register/',views.register, name='register'),
    path('login/',views.login, name='login'), 
    path('logout/',views.logout, name='logout'),  
    path('', views.category_list, name='category_list'),
    url('products/', views.product_completelist, name='product_list'),
    path('<slug:category_slug>/', views.product_list,name='product_list_by_category'),
    path('<int:id>/', views.product_detail,name='product_detail'),
    path('add-to-cart/<pk>/', views.add_to_cart, name='add-to-cart'),
]