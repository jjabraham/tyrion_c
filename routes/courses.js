var models  = require('../models');
var express = require('express');
var router = express.Router();

// validation rule for course_id: should be one or more digits
router.param('course_id', function(req, res, next, val){
  var fn = /^\d+$/;
  var captures;
  if (captures = fn.exec(String(val))) {
    req.params['course_id'] = captures;
    next();
  } else {
    // next(new Error('Invalid format for course_id (routes)'));
    res.json({error:"Invalid format for course_id"})
  }
});



router.get('/:course_id', function(req, res, next) {
  models.Course.find({
    where: { id: req.params.course_id }
  }).then(function(course){
    console.log(course);
    (course === null) ? res.json({error:"nodata"}) : res.json(course);
  });
});

router.get('/:course_id/full', function(req, res, next) {
  var courseDetails = {course: {}, chapters: {}};
  models.Course.find({
    where: { id: req.params.course_id }
  }).then(function(course){
    courseDetails.course = course;
    if (course === null) res.json({error:"nodata"});
    models.Chapter.findAll({
      where : {CourseId: course.id, published: 1}
    }).then(function(chapters){
      courseDetails.chapters = chapters;
      res.json(courseDetails);
    });
  });
});
router.route('/')
  .get(function(req, res, next) {
    models.Course.findAll({
      where: { published: 1 }
    }).then(function(courses){
      (courses === null) ? res.json({error:"nodata"}) : res.json(courses);
    });
  })
  .post(function(req, res) {
    res.json({ message: 'POST courses endpoint works' });
  });


module.exports = router;
