from rest_framework import serializers
from django.contrib.auth.models import User
from drf_braces.serializers.form_serializer import FormSerializer
from cart.forms import CartAddProductForm
from store.models import Product,Category,Cart,Order

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name','slug','image')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','category','name','description','price','available','image')

class CartSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Cart
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    items = CartSerializer(read_only=True, many=True)
    class Meta:
        model = Order
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)

class CartFormSerializer(FormSerializer):
    class Meta(object):
        form = CartAddProductForm