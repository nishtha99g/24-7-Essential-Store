from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import redirect,get_object_or_404
from store.models import Product
from store.serializers import CartFormSerializer
from .cart import Cart
from .forms import CartAddProductForm


@api_view(['POST'])
def cart_add(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    serializer = CartFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        cart.add(product=product,quantity=request.POST['quantity'],update_quantity=request.POST['update'])
        return Response(serializer.data, status=201)        
    return Response(serializer.errors, status=404)

@api_view(['DELETE'])
def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return redirect('cart:cart_detail')

@api_view(['GET'])
def cart_detail(request):
    cart = Cart(request)
    return Response(request, {'cart': cart})
