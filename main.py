#!/usr/bin/env python
'''
Run first:
    $(gcloud beta emulators datastore env-init)
ytamura
'''
import os
import string
import logging

from flask import Flask, Blueprint, render_template
from flask_cors import CORS

import utils
from api.agile_api import agile_api
from api.nihongo_api import nihongo_api


app = Flask(__name__, static_url_path='',
                      static_folder='frontend/build',
                      template_folder='frontend/build')
app.register_blueprint(agile_api)
app.register_blueprint(nihongo_api)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def home():
    return render_template('index.html', current_app='main')


@app.route('/agile')
def agile():
    return render_template('index.html', current_app='agile')


@app.route('/nihongo')
def nihongo():
    return render_template('index.html', current_app='nihongo')


@app.route('/sudoku')
def sudoku():
    return render_template('index.html', current_app='sudoku')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)