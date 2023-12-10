from flask import Flask, make_response, jsonify
from models import db
from flask_restful import Resource, Api
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)


class Home(Resource):
    def get(self):
        resp_dict = {
            "Home": "Welcome to Task Manager"
        }
        resp = make_response(
            jsonify(resp_dict),
            200,
        )
        return resp
api.add_resource(Home, '/')

