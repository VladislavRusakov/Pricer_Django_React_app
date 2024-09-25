from django.urls import path
from . import views

urlpatterns = [
    path('test', views.apiTest.as_view()),
    path('wishlist', views.apiGetWishlist.as_view()),
]
