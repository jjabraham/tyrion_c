/*jslint node: true */
"use strict";

var jwt = require('jwt-simple');
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];
var models  = require('../models');
var auth = {

  //login: function(req, res) {
  login: function(username, password) {

    // var username = req.body.username || '';
    // var password = req.body.password || '';

    //TODO: do this check in route
    //TODO: remove all direct responses res.json. simply return values to the route
    // if (username === '' || password === '') {
    //   res.status(401);
    //   res.json({
    //     "status": 401,
    //     "message": "Invalid credentials"
    //   });
    //   return;
    // }

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


  //validation for api calls using the token
  validateUser: function(username) {
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB.
      name: 'arvind',
      role: 'admin',
      username: 'arvind@myapp.com'
    };

    return dbUserObj;
  },
};

function genToken(user) {
  var expires = expiresIn(config.jwtexpire);
  var token = jwt.encode({
    exp: expires
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
