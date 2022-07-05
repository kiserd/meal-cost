from flask import Flask

def create_app():
	# init flask app and extensions
	app = Flask(__name__)

	# register blueprints
	from .routes import main as main_blueprint
	app.register_blueprint(main_blueprint)

	return app
