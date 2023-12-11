from flask import Flask, make_response, jsonify
from models import db, Task, User
from flask_restful import Resource, Api
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)


class GetUsers(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        resp = make_response(
            jsonify(users),
            200,
        )       
        return resp
api.add_resource(GetUsers, '/')


class GetTask(Resource):
    def get(self):
        tasks = [task.to_dict() for task in Task.query.all()]
        r = make_response(
            jsonify(tasks),
            200,
        )
        return r
api.add_resource(GetTask, '/tasks')







