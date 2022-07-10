from flask import Blueprint, render_template, redirect, flash, url_for, make_response, request
from . import dynamodb_handler as ddb

main = Blueprint('main', __name__)

@main.route("/")
@main.route("/home")
def home():
    return render_template('index.html')

@main.route("/api/ingredients", methods=['GET', 'POST'])
def ingredients():
    # handle POST requests **CREATE**
    # should create new ingredient
    if request.method == 'POST':
        name = request.json.get('name')
        category = request.json.get('category')
        res = ddb.createIngredient(name, category)
        return make_response('not sure what to send you yet...')
    # handle GET requests **READ**
    else:
        res = ddb.getAllIngredients()
        print('res: ', res)
        return make_response({'ingredients': res})
