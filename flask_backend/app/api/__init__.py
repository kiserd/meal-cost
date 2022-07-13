from flask import Blueprint

bpt_api = Blueprint('bpt_api', __name__, template_folder='templates')

from . import views
