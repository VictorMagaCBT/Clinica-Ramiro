"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_mail import Message, Mail
from api.models import db, User
from sqlalchemy import not_ 
from api.utils import generate_sitemap, APIException
from api.data import populate_user


mail= Mail()

api = Blueprint('api', __name__)



@api.route('/create-user', methods=['POST'])
def create_user():

   data = request.get_json()
   print("Data received:", data)

   if data is None:
       response_body = {
           "msg": "Body should be passes with request"
       }
       return jsonify(response_body),400
   
   elif "name" not in data:
        response_body = {
           "msg": "Name doesnt exist in the request"
       }
        return jsonify(response_body),400
   
   elif "country" not in data:
        response_body = {
           "msg": "Country doesnt exist in the request"
       }
        return jsonify(response_body),400
   
   elif "email" not in data:
        response_body = {
           "msg": "Email doesnt exist in the request"
       }
        return jsonify(response_body),400

   elif "object" not in data:
        response_body = {
           "msg": "Object doesnt exist in the request"
       }
        return jsonify(response_body),400
   
   elif "phone_number" not in data:
        response_body = {
           "msg": "Phone number doesnt exist in the request"
       }
        return jsonify(response_body),400
   
   elif "message" not in data:
        response_body = {
           "msg": "Message doesnt exist in the request"
       }
        return jsonify(response_body),400
   
   new_user= User(name = data["name"], email = data["email"], phone_number=data["phone_number"], country= data["country"], object= data["object"], message=data["message"], date=data["date"])
   db.session.add(new_user)   
   db.session.commit()

   send_email_notification(new_user)
   print(new_user)

   return jsonify({"msg": "user has been added"}), 200

def send_email_notification(user):
    msg = Message('Novo usuário criado',
                  recipients=['victor_miguel@msn.com'])
    msg.body = f'Um novo usuário foi criado:\n\nNome: {user.name}\nEmail: {user.email}\nObject: {user.object}\nMensagem: {user.message}'
    try:
        mail.send(msg)
        print('E-mail de notificação enviado com sucesso!')
    except Exception as e:
        print(f'Erro ao enviar e-mail de notificação: {str(e)}')

@api.route('/users',methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    all_users= list(map(lambda x: x.serialize(),all_users))
    return jsonify(all_users),200

@api.route('/user/<int:id>',methods=["GET"])
def get_single_user(id):
    user = User.query.get(id)
    return jsonify(user.serialize()), 200

