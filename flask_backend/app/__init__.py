"""
This contains the application factory for creating flask application instances.
Using the application factory allows for the creation of flask applications configured 
for different environments based on the value of the CONFIG_TYPE environment variable
"""
import os
from flask import Flask
from flask_cors import CORS
# from flask_mail import Mail

### Flask extension objects instantiation ###
# mail = Mail()

### Application Factory ###
def create_app():

	app = Flask(__name__, static_url_path='', static_folder='../react_frontend/build')
	CORS(app)

	# Configure the flask app instance
	CONFIG_TYPE = os.getenv('CONFIG_TYPE', default='config.DevelopmentConfig')
	app.config.from_object(CONFIG_TYPE)


	# Register blueprints
	register_blueprints(app)

	# Initialize flask extension objects
	initialize_extensions(app)

	# Configure logging
	configure_logging(app)

	# Register error handlers
	register_error_handlers(app)

	return app


### Helper Functions ###
def register_blueprints(app):
    from app.api import bpt_api

    app.register_blueprint(bpt_api, url_prefix='/api')
    # app.register_blueprint(main_blueprint)

def initialize_extensions(app):
    # mail.init_app(app)
	pass

def register_error_handlers(app):
	pass


def configure_logging(app):
	pass