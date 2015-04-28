/*jslint node: true */
"use strict";

var jwt = require('jwt-simple');
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];
var user  = require('../models/user');
var auth = {

  login: function(req, res) {

    var username = req.body.username || '';
    var password = req.body.password || '';

    //TODO: do this check in route
    //TODO: remove all direct responses res.json. simply return values to the route
    if (username === '' || password === '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = auth.validate(username, password);

    if (!dbUserObj) { // If authentication fails, we send a 401 back
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    if (dbUserObj) {
      // If authentication is success, we will generate a token
      // and dispatch it to the client
      res.json(genToken(dbUserObj));
    }

  },

  //initial login validation with username & password
  validate: function(username, password) {
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB.
      name: 'arvind',
      role: 'admin',
      username: 'arvind@myapp.com'
    };

    return dbUserObj;
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
