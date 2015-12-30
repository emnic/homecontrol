'use strict';
var express = require('express');
var router = express.Router();
var device_switch = require('../telldus/tellstick_w.js');


var mongoose = require('mongoose');
var Devices_model = require('../models/devices.js');

router.param('device', function(req, res, next, id) {
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

router.put('/:device', function(req, res, next) {
  Devices_model.findByIdAndUpdate(req.params.device, {$set: {hw_data: req.body.hw_data}}, function (err, post) {
    if (err) return next(err);
    res.json(post)
  });
});

router.put('/:device/state', function(req, res, next) {
  device_switch.on_off(req.body)
  req.device.changeState(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post)
  });
});

router.delete('/:id', function(req, res, next) {
  Devices_model.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.status(200).json(post)
  });
});

module.exports = router;
