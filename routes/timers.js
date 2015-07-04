var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Timers = require('../models/homecontrol.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  Timers.find(function (err, timers) {
    if (err) return next(err);
    res.json(timers);
  });
});

router.post('/', function(req, res, next) {
  Timers.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
