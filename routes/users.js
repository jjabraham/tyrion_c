/*jslint node: true */
"use strict";

var models  = require('../models');
var express = require('express');
var router = express.Router();

router.route('/')
  .post(function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var active = req.body.active;
    if (!username || !password || !email || !active) {
      res.json({error: 'POST variable missing'});
      return;
    } else {
      models.User.create({username: username, password: password, email: email, active: active})
        .then(function(user){
          res.json(user);
          return;
        })
        .catch(function(e){
          res.json({error: e.errors[0].message});
          return;
        });
    }
  });

  module.exports = router;
