from app import app
from models import db, Task, User
import random
from faker import Faker

fake = Faker()

with app.app_context():
    Task.query.delete()
    User.query.delete()


    tasks= [
        'Add Prototype on invision',
        'Make a login flow in figma',
        'Documentation for food delivery',
        'Add multiselection for Travel-story',
        'Create Detail view for Travel-story',
        'Watch Jujitsu Kaisen',
    ]
    task = []
    for i in range(6):
        print("**Alive**")
        assignTask = Task(
            name = tasks[i],
            status = random.choice(['In progress', 'In Review', 'Done', 'To Do']),
            time = random.randint(1,12))
        print('**still works**')
        task.append(assignTask)
        db.session.add_all(task)
        db.session.commit()

        users = []
        for i in range(6):
            print('**still alive**')
            people = User(username=fake.name(),
            avatar=fake.internet.avatar()
            )
        print('**plz work**')
        users.append(people)
        db.session.add_all(users)
        db.session.commit()


