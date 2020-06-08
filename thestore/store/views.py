from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Category, Product
from .api.serializers import ProductSerializer,CategorySerializer

@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_list(request, category_slug=None):
    products = Product.objects.filter(available=True)
    category = get_object_or_404(Category, slug=category_slug)
    products = products.filter(category=category)
    serializer = ProductSerializer(products, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, id):
    product = get_object_or_404(Product,pk=id,available=True)
    serializer = ProductSerializer(product, context={'request': request})
    return Response(serializer.data)