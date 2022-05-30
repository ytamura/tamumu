"""
datastore_script.py
Locally, use:
- $(gcloud beta emulators datastore env-init)
- gcloud beta emulators datastore start (--no-store-on-disk)
- to reset data when no-store-on-disk:
  curl -X POST http://localhost:8081/reset

ytamura

Initial version: March 10, 2021

Usage:
  datastore_script.py load
  datastore_script.py dump
  datastore_script.py del <id>

Options:
  -h, --help  Show this screen.
"""
import json
import time

from docopt import docopt
from google.cloud import datastore

from data.agile_games import games


def load_game_data(client):
    entities = []
    with client.transaction():
        for game in games:
            # Supply key to specify ID, otherwise autogenerates ID
            key = client.key("Game", game['_id'])
            game_entity = datastore.Entity(key=key)

            game_entity.update(
                {
                    "name": game['name'],
                    "status": game['status'],
                    "players": game['players'],
                    "last_updated": (
                        game['last_updated'] if 'last_updated' in game
                        else game['_id']),
                }
            )

            entities.append(game_entity)
        client.put_multi(entities)


def dump_game_data(client, kind="Game"):
    query = client.query(kind=kind)
    results = list(query.fetch())

    print('Database:')
    for result in results:
        #result['_id'] = result.key.id
        print(result)

def delete_game(client, _id, kind="Game"):
    key = client.key(kind, _id)
    client.delete(key)


if __name__ == '__main__':
    args = docopt(__doc__)

    client = datastore.Client()

    if args['load']:
        load_game_data(client)
        time.sleep(3)
    elif args['del']:
        delete_game(client, int(args['<id>']))

    dump_game_data(client)
