"""
api.py
Provides API for Flask web app

ytamura

Initial version: February 28, 2021
"""
import os
import hashlib

from flask import Blueprint, jsonify, request
from google.cloud import datastore

from config import ADMIN_HASH

api = Blueprint('api', __name__)


client = datastore.Client()


@api.route('/api/agile/games')
def get_all_games():
    print('fetching games')
    query = client.query(kind="Game")
    results = list(query.fetch())
    for result in results:
        result['_id'] = result.key.id
    print(len(results))
    print(results)
    return jsonify(results)


@api.route('/api/agile/update_game', methods=['POST'])
def update_game():
    try:
        data = request.get_json()
        with client.transaction():
            key = client.key("Game", int(data['_id']))
            game_entity = datastore.Entity(key=key)

            game_entity.update(
                {
                    "name": data['name'],
                    "status": data['status'],
                    "players": data['players'],
                }
            )
            client.put(game_entity)
        return 'updated'
    except Exception as e:
        print('Update failed: {}'.format(e))
        return jsonify(e), 400


@api.route('/api/agile/delete_game', methods=['POST'])
def delete_game():
    try:
        data = request.get_json()
        with client.transaction():
            key = client.key("Game", int(data['_id']))
            client.delete(key)
        return 'deleted'
    except Exception as e:
        print('Deletion failed: {}'.format(e))
        return jsonify(e), 400


@api.route('/api/agile/login', methods=['POST'])
def unlock():
    data = request.get_json()

    if not data:
        return jsonify({'msg': 'Something went wrong.'}), 400

    hashed_pw = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

    return jsonify(hashed_pw == ADMIN_HASH)
