import os
import cgi
import jinja2

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape=True)

site_loc = '/'

def escape_html(s):
    return cgi.escape(s, quote = True)

def render_str(template, **params):
    t = jinja_env.get_template(template)
    params['site_loc'] = site_loc
    return t.render(params)
