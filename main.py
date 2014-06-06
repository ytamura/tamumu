#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import string
import logging

import utils

import webapp2
from google.appengine.api import memcache

class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)
    
    def my_redirect(self, destination):
        self.redirect(utils.site_loc + destination)

    def render_str(self, template, **params):
        return utils.render_str(template, **params)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))

class AboutHandler(Handler):
    def render_about(self):
        self.render("about.html")

    def get(self):
        self.render_about();

class MainHandler(Handler):
    def render_main(self):
        self.render("portal.html")

    def get(self):
        self.render_main()

app = webapp2.WSGIApplication([
    ('/about', AboutHandler),
    ('[/]?', MainHandler)
], debug=True)
