"""
api.py
Provides API for Flask web app

ytamura

Initial version: February 28, 2021
"""
import hashlib

from flask import Blueprint, jsonify, request

from data.agile_games import games
from config import ADMIN_HASH

api = Blueprint('api', __name__)


@api.route('/api/agile/games')
def get_all_games():
	return jsonify(games)


@api.route('/api/agile/login', methods=['POST'])
def unlock():
    data = request.get_json()

    if not data:
        return jsonify({'msg': 'Something went wrong.'}), 400

    hashed_pw = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

    return jsonify(hashed_pw == ADMIN_HASH)
