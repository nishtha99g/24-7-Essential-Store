from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cart/', include('cart.urls', namespace='cart')),
    path('', include('store.urls', namespace='store')),
    
]

if settings.DEBUG:    
    urlpatterns += static(settings.MEDIA_URL,                          
                            document_root=settings.MEDIA_ROOT)