from flask import Blueprint, render_template, redirect, flash, url_for, make_response

main = Blueprint('main', __name__)

@main.route("/")
@main.route("/home")
def home():
    return render_template('index.html')

# add a new ingredient
@main.route("/create_ingredient", methods=['GET', 'POST'])
def create_ingredient():
    return render_template('ingredient/create.html')

@main.route("/dummy")
def dummy():
    return make_response('You made it buddy')
