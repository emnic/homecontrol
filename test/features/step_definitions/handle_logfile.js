'use strict';

var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect =chai.expect;


var logfile = "2015-07-07 15:32:16; Timer 1; on; 2015-07-07 15:32:17; Timer 2; off; 2015-07-07 15:39:17; Motion detector; triggered; 2015-07-07 16:32:16; Timer 3; on; 2015-07-07 16:32:17; Timer 4; off; 2015-07-07 15:32:16; Timer 5; on; 2015-07-07 15:32:17; Timer 6; off;"

// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

module.exports = function() {
  
  this.World = require("../support/world.js").World;
  
  this.Given(/^I'm in the logfile section$/, function (callback) {
    element(by.linkText('Logfile')).click().then(function(){
      callback();
    });
  });

  this.When(/^I want to watch the logfile$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^the logfile is displayed$/, function (callback) {
    var timer = element(by.binding('vm.logfile'));

    timer.getText().then(function(text) {
      expect(text).to.equal(logfile);
      callback();
    });
  });

  this.Given(/^there exist a logfile with entries in it$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I choose to filter on a specific timespan$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^only logfile entries between the specifed dates are displayed$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I choose to filter on a specific device ID$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^only logfile entries for the specifed device is displayed$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};