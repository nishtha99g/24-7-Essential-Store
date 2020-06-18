from django.contrib import admin
from .models import Category,Product,Cart,Order



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id','name', 'price', 'available']
    list_editable = ['price', 'available']

admin.site.register(Cart)
admin.site.register(Order)