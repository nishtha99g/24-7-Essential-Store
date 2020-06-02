from rest_framework import serializers
from store.models import Product,Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('category','name','description','price','available','image')