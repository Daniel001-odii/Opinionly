from django.contrib import admin
from .models import Question, Opinion
# Register your models here.
class OpinionInline(admin.TabularInline):
    model = Opinion
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    # fieldsets = [
    #     (None,               {'fields': ['question_text']}),
    #     ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    # ]
    inlines = [OpinionInline]
    list_display = ('question_text', 'pub_date')
    search_fields = ['question_text']
    prepopulated_fields = {"slug": ("question_text",)}

admin.site.register(Question, QuestionAdmin)
# admin.site.register(Opinion)
