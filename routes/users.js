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

    //for now, set users as admin manually in the db
    var role = 'user';

    if (!username || !password || !email || !active) {
      res.json({error: 'POST variable missing'});
      return;
    } else {
      models.User.create({username: username, password: password, email: email, role: role, active: active})
        .then(function(user){
          res.json(user);
          return;
        })
        .catch(function(e){
          res.status(400).json({error: e.errors[0].message});
          return;
        });
    }
  });

  module.exports = router;
