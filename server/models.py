from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    status = db.Column(db.String)
    time = db.Column(db.Integer)

    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            'status': self.status,
            'time': self.time
        }
