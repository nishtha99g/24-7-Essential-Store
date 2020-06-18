from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib import messages 
from django.shortcuts import get_object_or_404
from .models import Category, Product, Cart , Order
from .api.serializers import ProductSerializer,CategorySerializer,CartSerializer,OrderSerializer

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

@api_view(['POST'])
def add_to_cart(request, pk) :
    item = get_object_or_404(Product, pk = pk )
    cartdata={
        product : item,
        user : request.user,
        ordered : False
    }
    cserializer = CartSerializer(data=cartdata)
    if cserializer.is_valid():
        cserializer.save()
        order_qs = Order.objects.filter(user=request.user, ordered= False)
        order_item = Cart.objects.filter(user=request.user,item=item)
        if order_qs.exists() :
            order = order_qs[0]
            
            if order.items.filter(item__pk = item.pk).exists() :
                order_item.quantity += 1
                order_item.save()
                messages.info(request, "Added quantity Item")
                return Response(status=201)
            else:
                order.items.add(order_item)
                messages.info(request, "Item added to your cart")
                return Response(status=201)
        else:
            ordered_date = timezone.now()
            orderdata={
                user:request.user,
                ordered_date : ordered_date
            }
            oserializer = OrderSerializer(data=orderdata)
            order=Order.objects.filter(user=request.user,ordered_date=ordered_date)
            if oserializer.is_valid():
                oserializer.save()
                order.items.add(order_item)
                messages.info(request, "Item added to your cart")
                return Response(status=201)
            return Response(oserializer.errors, status=404)
        
    return Response(cserializer.errors, status=404)