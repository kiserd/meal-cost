from flask import Flask
from flask_cors import CORS

def create_app():
	# init flask app and extensions
	app = Flask(__name__, static_url_path='', static_folder='../frontend/build')
	CORS(app)

	# register blueprints
	from .routes import main as main_blueprint
	app.register_blueprint(main_blueprint)

	return app
