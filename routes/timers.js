var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Timers_model = require('../models/timers.js');


router.param('timer', function(req, res, next, id) {
  var query = Timers_model.findById(id);

  query.exec(function (err, timer){
    if (err) { return next(err); }
    if (!timer) { return next(new Error('can\'t find timer')); }

    req.timer = timer;
    return next();
  });
});

router.get('/', function(req, res, next) {
  Timers_model.find(function (err, timers) {
    if (err) return next(err);
    res.json(timers);
  });
});

router.post('/', function(req, res, next) {
  Timers_model.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:timer/ontime', function(req, res, next) {
  req.timer.updateOnTime(req.body, function (err, post) {
    if (err) return next(err);

    res.json(post)
  });
});

router.delete('/:id', function(req, res, next) {
  Timers_model.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.status(200).json(post)
  });
});

module.exports = router;
