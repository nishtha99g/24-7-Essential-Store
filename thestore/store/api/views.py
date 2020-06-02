from rest_framework.generics import ListAPIView
from store.models import Product
from .serializers import ProductSerializer

class ProductListview(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
