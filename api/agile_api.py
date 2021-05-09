"""
agile_api.py
Provides API for Agile app

ytamura

Initial version: February 28, 2021
"""
import os
import hashlib

from flask import Blueprint, jsonify, request
from google.cloud import datastore

from config import ADMIN_HASH
from api.datastore_utils \
    import get_all, delete_entity, update_entity, GAME_KIND

agile_api = Blueprint('agile_api', __name__)

client = datastore.Client()


@agile_api.route('/api/agile/games')
def get_all_games():
    return get_all(client, GAME_KIND)


@agile_api.route('/api/agile/update_game', methods=['POST'])
def update_game():
    data = request.get_json()
    return update_entity(client, GAME_KIND, data)


@agile_api.route('/api/agile/delete_game', methods=['POST'])
def delete_game():
    data = request.get_json()
    return delete_entity(client, GAME_KIND, data)


@agile_api.route('/api/agile/login', methods=['POST'])
def unlock():
    data = request.get_json()

    if not data:
        return jsonify({'msg': 'Something went wrong.'}), 400

    hashed_pw = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

    return jsonify(hashed_pw == ADMIN_HASH)
