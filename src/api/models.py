from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    phone_number = db.Column(db.String(9), unique=False, nullable=False)
    date = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)
    object = db.Column(db.String(120), unique=False, nullable=False)
    message = db.Column(db.String(450), unique=False, nullable=False)
    country = db.Column(db.String(80), unique=False, nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "phone_number": self.phone_number,
            "country": self.country,
            "object": self.object,
            "message": self.message,
            "date": self.date
            # do not serialize the password, its a security breach
        }
    
    def __repr__(self):
        return f'<User {self.email}>'