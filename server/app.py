import os
from flask import Flask, make_response, jsonify, render_template
from models import db, Task, User
from flask_restful import Resource, Api
from flask_migrate import Migrate

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")
class GetUsers(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        resp = make_response(
            jsonify(users),
            200,
        )       
        return resp
api.add_resource(GetUsers, '/users')


class GetTask(Resource):
    def get(self):
        tasks = [task.to_dict() for task in Task.query.all()]
        r = make_response(
            jsonify(tasks),
            200,
        )
        return r
api.add_resource(GetTask, '/tasks')







