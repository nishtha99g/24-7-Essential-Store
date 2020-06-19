from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt 
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from django.contrib import messages 
from django.shortcuts import get_object_or_404
from .models import Category, Product, Cart , Order
from .serializers import ProductSerializer,CategorySerializer,CartSerializer,OrderSerializer


@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_completelist(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, context={'request': request}, many=True)
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
    cartdata=Cart(
        product = item,
        user = request.user,
        ordered = False
    )
    cserializer = CartSerializer(cartdata)
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
            orderdata=Order(
                user=request.user,
                ordered_date = ordered_date
            )
            oserializer = OrderSerializer(orderdata)
            order=Order.objects.filter(user=request.user,ordered_date=ordered_date)
            if oserializer.is_valid():
                oserializer.save()
                order.items.add(order_item)
                messages.info(request, "Item added to your cart")
                return Response(status=201)
            return Response(oserializer.errors, status=404)
        
    return Response(cserializer.errors, status=404)

# @api_view(['POST'])
@csrf_exempt 
def register(request):
      json.loads(request.body.decode('utf-8'))
      first_name=request.body.get('first_name')
      last_name=request.body.get('last_name')
      username=request.body.get('username')
      password=request.body.get('password')
      password2=request.body.get('password2')
      print(first_name,username,last_name,request.body)
      if password == password2:
         if not User.objects.filter(username=username).exists():            
            user = User.objects.create_user(username=username,first_name=first_name,last_name=last_name,password=password)
            user.save()
            return HttpResponse("Hello")
            # userser =UserSerializer(request.data)
            # if userser.is_valid() :
            #     userser. save()
            # messages.success(request,'Successfully Registered')
            # return Response(status=status.HTTP_201_ return Response(userser.errors, status=status.HTTP_400_BAD_REQUEST)  CREATED)
    #  return redirect('register')      
  
@api_view(['POST'])
def login(request):
   if request.method == 'POST':
      username=request.POST.get('username')
      password=request.POST.get('password')
      user=auth.authenticate(username=username,password=password)
      if user is not None:
         auth.login(request,user)
         return redirect('dashboard')
      else:
        messages.error(request,'Invalid credentials')
        return redirect('login')   
   else:
      return render(request,'login.html')     

def logout(request):
   auth.logout(request)
   return redirect('login')