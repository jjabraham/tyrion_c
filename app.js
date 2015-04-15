var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//import routes
var routes = require('./routes/index');
var courses = require('./routes/courses');

var app = express();
app.set('env','development');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use routes
app.use('/', routes);
app.use('/api/courses', courses);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//API wide params
app.param('course_id', function(req, res, next, val){
  var fn = /^\d+$/;
  var captures;
  if (captures = fn.exec(String(val))) {
    req.params['course_id'] = captures;
    next();
  } else {
    next(new Error('Invalid format for course_id'));
  }
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development' || app.get('env') === 'migration') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
