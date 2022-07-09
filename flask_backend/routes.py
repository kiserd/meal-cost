from flask import Blueprint, render_template, redirect, flash, url_for, make_response, request
from . import dynamodb_handler as ddb

main = Blueprint('main', __name__)

@main.route("/")
@main.route("/home")
def home():
    return render_template('index.html')

# add a new ingredient
# @main.route("/create_ingredient", methods=['GET', 'POST'])
# def create_ingredient():
#     if request.method == 'POST':
#         print('request.json: ', request.json)
#         name = request.json.get('name')
#         category = request.json.get('category')
#         print('name: ', name)
#         print('category: ', category)
#         res = ddb.createIngredient(name, category)
#         print('create ingredient res: ', res)
#         return make_response('not sure what to send you yet...')
#     # handle GET
#     return render_template('ingredient/create.html')

@main.route("/ingredients", methods=['GET', 'POST'])
# TODO
# Logan Kiser: what the heck do I name this view function?
def ingredients():
    # handle POST requests
    if request.method == 'POST':
        name = request.json.get('name')
        category = request.json.get('category')
        res = ddb.createIngredient(name, category)
        return make_response('not sure what to send you yet...')
    # handle GET requests
    else:
        res = ddb.getAllIngredients()
        print('res: ', res)
        return make_response({'ingredients': res})
