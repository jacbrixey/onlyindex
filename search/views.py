from django.shortcuts import render
import requests
import bs4
from django.http import JsonResponse
from django.views.generic import ListView
from django.utils.translation import gettext as _
from django.utils.translation import get_language, activate, gettext
import json


def tester(request):
    return render(request, 'tester.html')

def text(request):
    return render(request, 'text.html')

#page request returns
def index(request):
    return render(request, 'index.html')

def az_browse(request):
    return render(request, 'az_browse.html')

def started(request):
    return render(request, 'started.html')

def verbconjugate(request):
    return render(request, 'verbconjugate.html')

def browse_dictionary(request):
    return render(request, 'templates/browse_dictionary.html')

def randomword(request):
    return render(request, 'randomword.html')

def story(request):
    return render(request, 'story.html')

def choword(request):
    return render(request, 'choword.html')

    # word = request.GET['choword']  # using request.POST will NOT show the word in the url, using request.GET does show it
    # word = str(word)
    #
    # # the xhtml file
    # HTMLFile = open("/Users/linabrixey/Desktop/mbci_website/static/mbci_111.xml", "r")
    # # open and read
    # index = HTMLFile.read()
    # # Creating a BeautifulSoup object and specifying the parser
    # soup = bs4.BeautifulSoup(index, 'lxml')

    # search in file for word
    # anompa = soup.find_all('entry')
    #
    # pos = []
    # definition = []
    # example = []
    # translation_example = []
    # restrictions = []
    # entryindict = []
    # idnum = []
    # ed = []
    # found = False
    #
    #
    # for i in anompa:
    #     holding = i.find('lexical-unit', {'form': 'cho-x-dupl1'})
    #     try:
    #         holdingi = holding.get_text()
    #         #print(holdingi)
    #     except:
    #         holdingi=''
    #
    #         # if found in the entry
    #     if word in holdingi:
    #
    #         # now parse
    #         # identifier
    #         identifier = i.a('id')
    #         # print(identifier)
    #         # fromfile.append(i.get_text(separator=' '))
    #
    #
    #         entryindict_i = (i.find('lexical-unit', {'form': 'cho-x-dupl1'}))
    #         try:
    #             entryindict.append(entryindict_i.get_text())
    #
    #         except:
    #             entryindict.append('')
    #
    #         idnum_i = (i.find('mediafiles'))
    #         try:
    #             idnum.append(idnum_i.get('href'))
    #
    #         except:
    #             idnum.append('')
    #
    #         pos_i = (i.find('grammatical-info'))
    #         try:
    #             pos.append(pos_i.get_text())
    #         except:
    #             pos.append('')
    #
    #         restrictions_i = (i.find('note'))
    #         try:
    #             restrictions.append(restrictions_i.get_text())
    #         except:
    #             restrictions.append('')
    #
    #         definition_i = (i.find('definition'))
    #         try:
    #             definition.append(definition_i.get_text())
    #         except:
    #             definition.append('')
    #
    #         example_i = (i.find('example',{'form':'lang'}))
    #         try:
    #             example.append(example_i.get_text())
    #         except:
    #             example.append('')
    #
    #         translation_example_i = (i.find('example', {'translation'}))
    #         try:
    #             translation_example.append(translation_example_i.get_text())
    #         except:
    #             translation_example.append('')
    #
    #
    #         found = True
    #
    #
    # if found == False:
    #     #could make ed -1, and add if statement in word.html
    #     word = 'Did you mean'
    #     entry = 'suggestions for, ' + word + ' '
    #     idnum = '0'
    #     definition = 'none found'
    #     pos = ''
    #     example = ''
    #     translation_example=''
    #
    #
    #
    # results = sortchosearchresult(word, entryindict,idnum,pos,definition,example,translation_example,restrictions)
    #
    #


    #results = {
     #   'word': word,
      #  'ed': ed,
       # 'entry': entryindict,
        #'id num':idnum,
        #'part of speech': pos,
        #'meaning': definition,
        #'example': example,
        #'translation of example': translation_example,
        #'restrictions': restrictions,
        #}

def word(request):
    return render (request, 'word.html')



#CATEGORY PAGES
def categories(request):
    return render(request, 'categories.html')

def fair_vocab(request):
    return render(request, 'categories/fair_vocab.html')

def birds(request):
    return render(request, 'categories/birds.html')

def colors(request):
    return render(request, 'categories/colors.html')

def ear(request):
    return render(request, 'categories/ear.html')

def eye(request):
    return render(request, 'categories/eye.html')

def food(request):
    return render(request, 'categories/food.html')

def head(request):
    return render(request, 'categories/head.html')

def insects(request):
    return render(request, 'categories/insects.html')

def kinship(request):
    return render(request, 'categories/kinship.html')

def months(request):
    return render(request, 'categories/months.html')

def mouth(request):
    return render(request, 'categories/mouth.html')

def nose(request):
    return render(request, 'categories/nose.html')

def numbers(request):
    return render(request, 'categories/numbers.html')

def occurrences(request):
    return render(request, 'categories/occurrences.html')

def religion(request):
    return render(request, 'categories/religion.html')

def shapes(request):
    return render(request, 'categories/shapes.html')

def snakes(request):
    return render(request, 'categories/snakes.html')

def tooth(request):
    return render(request, 'categories/tooth.html')

def trees(request):
    return render(request, 'categories/trees.html')


#ALL THE INTERVIEW PAGES
def interviews(request):
    return render(request, 'interviews.html')
def willis_interview(request):
    return render(request, 'interviews/AryWillis.html')

def bandr_interview(request):
    return render(request, 'interviews/RuthandBarbara.html')


