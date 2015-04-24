var express = require('express');
var router = express.Router();
var auth  = require('../helpers/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  console.log('req', req);
  console.log('res', res);
  auth.login(req, res);
  //res.json({ message: 'POST courses endpoint works' });
});

module.exports = router;
