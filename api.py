"""
api.py
Provides API for Flask web app

ytamura

Initial version: February 28, 2021
"""
from flask import Blueprint, jsonify

from data.agile_games import games

api = Blueprint('api', __name__)


@api.route('/api/agile/games')
def get_all_games():
	return jsonify(games)