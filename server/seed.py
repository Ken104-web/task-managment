from app import app
from models import db, Task, User, TaskUser
import random
from faker import Faker

fake = Faker()

with app.app_context():
    User.query.delete()
    Task.query.delete()

    users = []
    for i in range(6):
        print('**all good**')
        people = User(username=fake.name(),
        avatar=fake.emoji()
        )
        users.append(people)
    db.session.add_all(users)
    db.session.commit()


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

    task_user = []

    for i in range(6):
        ts = TaskUser(user_id=random.randint(1, 6), task_id=random.randint(1, 6))
        task_user.append(ts)
    db.session.add_all(task_user)
    db.session.commit()


