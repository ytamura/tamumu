"""
datastore_utils.py
Commmon datastore patterns

ytamura

Initial version: March 27, 2021
"""

from flask import jsonify

from google.cloud import datastore

GAME_KIND = 'Game'
NIHONGO_LEADER_KIND = 'Nihongo_Leader'


def get_all(client, kind):
    try:
        query = client.query(kind=kind)
        results = list(query.fetch())
        for result in results:
            result['_id'] = result.key.id
        return jsonify(results)
    except Exception as e:
        print('Get all {} kind failed: {}'.format(kind, e))
        return jsonify(str(e)), 400


def update_entity(client, kind, data):
    try:
        with client.transaction():
            key = client.key(kind, int(data['_id']))
            game_entity = datastore.Entity(key=key)

            update_data = {key:val for key, val in data.items()
                           if key != '_id'}

            game_entity.update(update_data)
            client.put(game_entity)
        return 'updated'
    except Exception as e:
        print('Update failed: {}'.format(e))
        return jsonify(str(e)), 400


def delete_entity(client, kind, data):
    try:
        with client.transaction():
            key = client.key(kind, int(data['_id']))
            client.delete(key)
        return 'deleted'
    except Exception as e:
        print('Deletion failed: {}'.format(e))
        return jsonify(str(e)), 400