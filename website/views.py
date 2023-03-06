from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Question, Opinion
from django.template import loader
from django.db.models import Sum

from django.urls import reverse
from django.views import generic

# Create your views here.

class IndexView(generic.ListView):
    template_name = 'website/index.html'
    context_object_name = 'latest_question_list'
    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]
    

class DetailView(generic.DetailView):
    model = Question
    template_name = 'website/detail.html'

   





