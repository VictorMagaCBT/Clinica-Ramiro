
import json
from api.models import db, User

def populate_user():
    User.query.delete()
    db.session.add(User(email='victor@gmail.com', name='victor', object='know more', message = 'I want to know more about ortognática'))
    db.session.add(User(email='pedro@gmail.com', name='pedro', object='know more too', message = 'I want to know more about inplants'))
    db.session.commit()