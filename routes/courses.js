var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/:user_id', function(req, res, next) {
  models.Course.find({
    where: { id: req.params.user_id }
  }).then(function(course){
    res.json(course);
  });
  // res.json(db);
  //res.json({ message: 'GET courses endpoint works' });
});

router.post('/', function(req, res) {
  res.json({ message: 'POST courses endpoint works' });
});
//
// router.get('/courses', function(req, res) {
//   res.send("{ message: 'GET courses endpoint works' }");
// });


module.exports = router;
