from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.mainview, name='main'),
    path('ajax', views.ajax),
    path('api/v1/', include('api.urls'))
]

urlpatterns += staticfiles_urlpatterns()
