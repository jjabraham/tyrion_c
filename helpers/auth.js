/*jslint node: true */
"use strict";

var jwt = require('jwt-simple');
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];
var models  = require('../models');
var promise = require("bluebird");
var auth = {

  login: function(username, password) {
      models.User.find({ where: {username: username} })
        .then(function(user) {
          if (user !== null){
            if (user.checkPassword(password)) {
              console.log("password ok1", user.get({plain: true}));
              return genToken(user);
            } else {
              console.log("password fail");
              return false;
            }
          } else {
            console.log("username fail");
            return false;
          }
        });
  },

  // a 'Nodeback' version of the login function to handle promise functionality
  // of models.User.find()

  loginNode: function(username, password, cb) {
    var response = false;
    models.User.find({ where: {username: username} })
      .then(function(user) {
        if (user !== null){
          if (user.checkPassword(password)) {
            response = genToken(user);
          } else {
            response = false;
          }
        } else {
          response = false;
        }
        cb(null, response);
      });
  },

  //validation for api calls using the token
  validateUser: function(username) {
    // TODO: do a proper check here
    var dbUserObj = { // spoofing a userobject from the DB.
      name: 'arvind',
      role: 'admin',
      username: 'arvind@myapp.com'
    };

    return dbUserObj;
  }
};

function genToken(user) {
  var expires = expiresIn(config.jwtexpire);
  var token = jwt.encode({
    exp: expires,
    username: user.username,
    role: user.role
  }, config.jwtsecret);

  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(numSeconds) {
  var dateObj = new Date();
  var newTime = parseInt(dateObj.getTime()) + (parseInt(numSeconds) * 1000);
  return dateObj.setTime(newTime);
}

module.exports = auth;
