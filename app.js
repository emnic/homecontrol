var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var timers = require('./routes/timers');
var devices = require('./routes/devices');
var logfile = require('./routes/logfile');

var app = express();

// Logfile
var winston = require('winston');
winston.add(winston.transports.File, { filename: 'logs/homecontrol.log' });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/timers', timers);
app.use('/logfile', logfile);
app.use('/devices', devices);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
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

require('./models/timers');
require('./models/devices')
var config = require('./config');
var mongoose = require('mongoose');

// test only
var env = app.get('env');
//var env = process.env.NODE_ENV
console.log(env);
if ('test' === env) {
  app.set('mongodb_uri', config.db[env]);
}

// production only
if ('production' == env) {
  app.set('mongodb_uri', config.db[env]);
}

mongoose.connect(app.get('mongodb_uri'));

module.exports = app;
