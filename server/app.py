from flask import Flask, make_response, jsonify
from models import db, Task
from flask_restful import Resource, Api
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)


class GetTask(Resource):
    def get(self):
        tasks = [task.to_dict() for task in Task.query.all()]
        r = make_response(
            jsonify(tasks),
            200,
        )
        return r
api.add_resource(GetTask, '/')

