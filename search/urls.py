from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
import json
import regex



urlpatterns = [
    path('', views.index, name='index'), #home directory
    path('word', views.word, name='word'), #word search
    path('text', views.text, name='text'),
    path('choword', views.choword, name='choword'),  # reverse word search
    path('interviews', views.interviews, name='interviews'),
    path('az_browse', views.az_browse, name='az_browse'),
    path('started',views.started, name='started'),
    path('browse_dictionary', views.browse_dictionary, name='browse_dictionary'),
    path('verbconjugate', views.verbconjugate, name='verbconjugate'),
    path('tester',views.tester, name='tester'),
    path('randomword',views.randomword, name='randomword'),
    path('story', views.story, name = 'story'),
    path('willis_interview', views.willis_interview, name='willis_interview'),
    path('bandr_interview', views.bandr_interview, name='bandr_interview'),
    path('categories', views.categories, name="categories"),
    path('fair_vocab', views.fair_vocab, name='fair_vocab'),
    path('birds', views.birds, name='birds'),
    path('colors', views.colors, name='colors'),
    path('ear', views.ear, name='ear'),
    path('eye', views.eye, name='eye'),
    path('food', views.food, name='food'),
    path('head', views.head, name='head'),
    path('insects', views.insects, name='insects'),
    path('kinship', views.kinship, name='kinship'),
    path('months', views.months, name='months'),
    path('mouth', views.mouth, name='mouth'),
    path('nose', views.nose, name='nose'),
    path('numbers', views.numbers, name='numbers'),
    path('occurrences', views.occurrences, name='occurrences'),
    path('religion', views.religion, name='religion'),
    path('shapes', views.shapes, name='shapes'),
    path('snakes', views.snakes, name='snakes'),
    path('tooth', views.tooth, name='tooth'),
    path('trees', views.trees, name='trees')
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


