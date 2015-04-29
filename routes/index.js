/*jslint node: true */
"use strict";

var express = require('express');
var router = express.Router();
var auth  = require('../helpers/auth');
//var promise = require("bluebird");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username || '';
  var password = req.body.password || '';
  if (username === '' || password === '') {
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid credentials1"
    });
    return;
  }
  var authResponse = auth.login(username, password);
  console.log('authResponse', authResponse);
  if (authResponse) {
    res.json(authResponse);
  } else {
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid credentials2"
    });
    return;
  }
});

router.post('/register', function(req, res, next) {
  res.json({ message: 'duplicate register' });
});

module.exports = router;
