"""
nihongo_api.py
Provides API for Nihongo app

ytamura

Initial version: March 13, 2021
"""
import copy
import random

from flask import Blueprint, jsonify, request
from google.cloud import datastore

from data.nihongo_counting import words

nihongo_api = Blueprint('nihongo_api', __name__)

client = datastore.Client()


@nihongo_api.route('/api/nihongo/words')
def get_words():
    _words = copy.deepcopy(words)
    #random.shuffle(_words)
    for word in _words:
        all_options = word['correct'] + word['incorrect']
        random.shuffle(all_options)
        word['all_options'] = all_options
        del word['incorrect']

        n_correct = len(word['correct'])
        if n_correct > 1 and not 'note' in word:
            word['note'] = '{} are {} correct!'.\
                format('/'.join(word['correct']),
                       'both' if n_correct == 2 else 'all')
    return jsonify(_words)


@nihongo_api.route('/api/nihongo/high_score')
def get_high_score():
    # TODO
    return jsonify(8);


@nihongo_api.route('/api/nihongo/update_high_score', methods=['POST'])
def update_high_score():
    pass
