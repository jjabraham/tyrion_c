/*jslint node: true */
"use strict";

var express = require('express');
var router = express.Router();
var promise = require("bluebird");
var loginAsync  = promise.promisify(require('../helpers/auth').loginNode);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username || '';
  var password = req.body.password || '';
  if (username === '' || password === '') {
    res.status(400);
    res.json({
      "status": 400,
      "message": "Missing credentials"
    });
    return;
  }

  loginAsync(username, password)
    .then(function(loginResponse){
      if (loginResponse) {
        res.json(loginResponse);
      } else {
        res.status(401);
        res.json({
          "status": 401,
          "message": "Invalid credentials"
        });
        return;
      }
    });
});

module.exports = router;
