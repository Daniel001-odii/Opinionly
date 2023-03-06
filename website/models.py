from django.db import models
import datetime
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Question(models.Model):
    question_text = models.CharField(max_length=250)
    pub_date = models.DateTimeField('date asked')
    slug = models.SlugField(max_length=200, null=True)
    author = models.ForeignKey(User, related_name="posted_by", on_delete = models.CASCADE, default="")
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.question_text)
        super().save(*args, **kwargs)
    
    def was_asked_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

    def __str__(self):
        return self.question_text


class Opinion(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    opinion_text = models.CharField(max_length = 200)
    votes = models.IntegerField(default = 0)

    def __str__(self):
        return self.opinion_text