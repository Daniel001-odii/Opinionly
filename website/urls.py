from django.urls import path
from . import views

app_name = 'website'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    # path('<int:question_id>/results', views.results, name='results'),
    path('questions/<slug:slug>', views.DetailView.as_view(), name = 'detail'),
    # path('<int:question_id>/vote/', views.vote, name='vote'),
]