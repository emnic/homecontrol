'use strict';

var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect = chai.expect;
var request = require('sync-request');

process.env.NODE_ENV = 'test';

module.exports = function() {
  
  this.World = require("../support/world.js").World;
  
  this.Given(/^the scheduler is set in testmode$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Given(/^location (.*), (.*)$/, function (long, lat, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^date (.*)$/, function (date, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I send a request to get sundrise time (.*)$/, function (sunriseTime, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^sunset time$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I get the sunrise time and sunset time$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^a daily schedule exists$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^time passes the daily schedule time$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^a new schedule is calculated that is different from the old schedule$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};