var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Devices_model = require('../models/devices.js');

router.param('devices', function(req, res, next, id) {
  var query = Devices_model.findById(id);

  query.exec(function (err, device){
    if (err) { return next(err); }
    if (!device) { return next(new Error('can\'t find device')); }

    req.device = device;
    return next();
  });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  Devices_model.find(function (err, devices) {
    if (err) return next(err);
    res.json(devices);
  });
});

router.post('/', function(req, res, next) {
  Devices_model.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:devices/', function(req, res, next) {
  req.devices.updateOnTime(req.body, function (err, post) {
    if (err) return next(err);
    console.log('blahablaha');
    console.log(post);
    res.json(post)
  });
});

router.delete('/:id', function(req, res, next) {
  Devicess_model.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.status(200).json(post)
  });
});

module.exports = router;
