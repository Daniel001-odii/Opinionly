from django import template
from website.poll_extras import total_votes

register = template.Library()

@register.simple_tag(takes_context=True)
def total_votes_for_question(context, question_id):
    return total_votes(question_id)