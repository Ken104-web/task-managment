from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    # serialize_rules = ('-tasks',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    avatar = db.Column(db.String)

    # tasks = db.relationship('Task', secondary='task_users', back_populates='users')
    taskUser = db.relationship('TaskUser', backref='user')

class Task(db.Model, SerializerMixin):
    __tablename__ = 'tasks'

    # serialize_rules = ('-users',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    status = db.Column(db.String)
    time = db.Column(db.Integer)


    # users = db.relationship('User', secondary='task-users', back_populates='tasks')
    taskUser  = db.relationship('TaskUser', backref=('task'))

class TaskUser(db.Model):
    __tablename__ = 'task_users'

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
