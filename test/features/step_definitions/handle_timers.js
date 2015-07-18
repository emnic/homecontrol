'use strict';

var baseUrl = 'http://127.0.0.1:3000/'

var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect =chai.expect;
var config = require('../../../config');
var mongoose = require('mongoose');
var Timers_model = require('../../../models/timers.js');
var Devices_model = require('../../../models/devices.js');


// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

module.exports = function() {
  
  this.World = require("../support/world.js").World;
  
  this.Given(/^I'm in the timer section$/, function (callback) {
    element(by.linkText('Timers')).click().then(function(){
      callback();
    });
  });

  this.When(/^I want to create a new timer$/, function (callback) {
    element(by.buttonText('Add Timer')).click().then(function(){
      callback();
    });
  });

  this.Then(/^the new timer is added to the list of timers$/, function (callback) {
    var timer = element(by.binding('timer.name'));
    
    timer.getText().then(function(text) {
      expect(text).to.equal('NoName Timer 1');
      callback();
    });
  });

  this.When(/^I choose to delete the timer$/, function (callback) {
    element(by.buttonText('Delete')).click().then(function(){
      callback();
    });
  });

  this.Then(/^the timer is removed from the list of timers$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there exist at least one timer$/, function (callback) {
    element(by.linkText('Timers')).click().then(function(){
      
       // Add timer
      element(by.buttonText('Add Timer')).click().then(function(){
        
        //Check that there exists one timer
        var timer = element(by.binding('timer.name'));

        timer.getText().then(function(text) {
          expect(text).to.equal('NoName Timer 1');
          callback();
        });
      });
    });
  });

  this.When(/^I choose to add a schedule to the timer$/, function (callback) {
    
    // Add schedule
    element(by.buttonText('Edit')).click().then(function(){
      element(by.buttonText('Add Schedule')).click().then(function(){
        callback();
      });
    });
  });

  this.Then(/^the schedule is added to the choosen timer$/, function (callback) {
    
    element(by.buttonText('Save')).click().then(function(){
      callback();
    });
  });

  this.Given(/^there exist one schedule on a timer$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I choose to delete a schedule on the selected timer$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the schedule is removed$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};