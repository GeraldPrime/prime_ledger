from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.home, name='index'),
    path('dashboard.html', views.dashboard, name='dashboard'),
    path('deposit/', views.deposit, name='Deposit'),
    path('profile/', views.profile, name='profile'),
    path('signup/', views.signup, name='register'),
]
# urlpatterns+= static(settings.STATIC_URL, document_root.STATIC_ROOT)

