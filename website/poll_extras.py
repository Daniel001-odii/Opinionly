from .models import Opinion

def total_votes(question_id):
    return Opinion.objects.filter(question_id=question_id).aggregate(Sum('votes'))['votes_sum'] or 0