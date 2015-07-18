'use strict';

var baseUrl = 'http://127.0.0.1:3000/'

var expect = require('chai').expect;
var config = require('../../../config');
var mongoose = require('mongoose');
var Timers_model = require('../../../models/timers.js');
var Devices_model = require('../../../models/devices.js');


// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

module.exports = function() {
  
  this.World = require("../support/world.js").World;
  
  this.Given(/^I'm in the device section$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I want to create a new device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the new device is added to the list of devices$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there exist at least one device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I choose to delete a device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the device is removed from the list of devices$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there exists at least one device and one timer$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I choose to add a timer to a device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the timers is added to the device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^a timer is added to a device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I choose to remove the timer from the device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the timers is removed from the device$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};