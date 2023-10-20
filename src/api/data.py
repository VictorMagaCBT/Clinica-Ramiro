
import json
from api.models import db, User

def populate_user():
    User.query.delete()
    db.session.add(User(email='victor@gmail.com', name='victor', object='know more', message = 'I want to know more about ortognática', country = 'Brazil', date = '2021-05-05', phone_number = '123456789'))
    db.session.add(User(email='pedro@gmail.com', name='pedro', object='know more too', message = 'I want to know more about inplants', country = 'Brazil', date = '2021-05-06', phone_number = '123456789'))
    db.session.commit()