#!/usr/bin/env python
#
import os
import string
import logging

from flask import Flask, Blueprint, render_template
from flask_cors import CORS

import utils
from api import api


app = Flask(__name__, static_url_path='',
                      static_folder='frontend/build',
                      template_folder='frontend/build')
app.register_blueprint(api)
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