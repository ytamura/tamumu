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


# @app.route('/')
# def root():
#     return utils.render_str(".html")


@app.route('/')
def agile():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)