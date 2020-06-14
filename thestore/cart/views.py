from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import redirect,get_object_or_404
from store.models import Product
from store.api.serializers import CartFormSerializer
from .cart import Cart
from .forms import CartAddProductForm


@api_view(['POST'])
def cart_add(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        cart.add(product=product,
        quantity=cd['quantity'],
        update_quantity=cd['update'])
    return redirect('cart:cart_detail')

@api_view(['DELETE'])
def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return redirect('cart:cart_detail')

@api_view(['GET'])
def cart_detail(request):
    cart = Cart(request)
    serializer = ProductSerializer(product, context={'request': request})
    return Response(request, 'cart/detail.html', {'cart': cart})
