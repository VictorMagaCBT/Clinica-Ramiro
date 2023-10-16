"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from sqlalchemy import not_ 
from api.utils import generate_sitemap, APIException
from api.data import populate_user

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    populate_user();
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/create-user', methods=['POST'])
def create_user():

   data = request.get_json()

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
   
   elif "message" not in data:
        response_body = {
           "msg": "Message doesnt exist in the request"
       }
        return jsonify(response_body),400
   
   new_user= User(name = data["name"], email = data["email"], object= data["object"], message=data["message"])
   db.session.add(new_user)   
   db.session.commit()

   return jsonify({"msg": "user has been added"}), 200

@api.route('/users',methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    all_users= list(map(lambda x: x.serialize(),all_users))
    return jsonify(all_users),200

@api.route('/user/<int:id>',methods=["GET"])
def get_single_user(id):
    user = User.query.get(id)
    return jsonify(user.serialize()), 200