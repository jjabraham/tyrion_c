/*jslint node: true */
"use strict";

var models  = require('../models');
var express = require('express');
var router = express.Router();

// validation rule for course_id: should be one or more digits
router.param('course_id', function(req, res, next, val){
  var fn = /^\d+$/;
  var captures = fn.exec(String(val));
  if (captures) {
    req.params.course_id = captures;
    next();
  } else {
    res.json({error:"Invalid format for course_id"});
  }
});

router.get('/:course_id', function(req, res, next) {
  models.Course.find({
    where: {
      id: req.params.course_id,
      $not: [{published: 0}] }
  }).then(function(course){
    (course === null) ? res.json({}) : res.json(course);
  });
});

router.get('/:course_id/full', function(req, res, next) {
  var courseDetails = {course: {}, chapters: {}};
  models.Course.find({
    where: {
      id: req.params.course_id,
      $not: [{published: 0}] }
  }).then(function(course){
    console.log("course full", course);
    courseDetails.course = course;
    if (course === null) {
      res.json({});
    } else {
      models.Chapter.findAll({
        where : {CourseId: course.id, published: 1}
      }).then(function(chapters){
        courseDetails.chapters = chapters;
        res.json(courseDetails);
      });
    }
  });
});

router.route('/')
  .get(function(req, res, next) {
    models.Course.findAll({
      where: { published: 1 }
    }).then(function(courses){
      (courses === null) ? res.json({}) : res.json(courses);
    });
  })
  .post(function(req, res) {
    var name = req.body.name;
    var description = req.body.description;
    var cpd = req.body.cpd;
    var published = req.body.published;
    if (!name || !description || !cpd || !published){
      res.json({error: 'POST variable missing'});
    } else {
      //create course
      //use sequelize findOrCreate
      models.Course.create({name: name, description: description, cpd: cpd, published: published})
        .then(function(course){res.json(course);});

    }

  });


module.exports = router;
