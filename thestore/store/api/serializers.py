from rest_framework import serializers
from drf_braces.serializers.form_serializer import FormSerializer
from cart.forms import CartAddProductForm
from store.models import Product,Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name','slug','image')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','category','name','description','price','available','image')

class CartFormSerializer(FormSerializer):
    class Meta(object):
        form = CartAddProductForm