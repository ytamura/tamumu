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
from api.datastore_utils \
    import get_all, delete_entity, update_entity, NIHONGO_LEADER_KIND

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


@nihongo_api.route('/api/nihongo/leaders')
def get_leaders():
    return get_all(client, NIHONGO_LEADER_KIND)


@nihongo_api.route('/api/nihongo/update_leader', methods=['POST'])
def update_leader():
    data = request.get_json()
    return update_entity(client, NIHONGO_LEADER_KIND, data)


@nihongo_api.route('/api/nihongo/delete_leader', methods=['POST'])
def delete_leader():
    data = request.get_json()
    return delete_entity(client, NIHONGO_LEADER_KIND, data)
