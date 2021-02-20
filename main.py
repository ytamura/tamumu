#!/usr/bin/env python
#

import string
import logging

import utils

from flask import Flask

app = Flask(__name__)


@app.route('/')
def root():
    return utils.render_str("about.html")


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)