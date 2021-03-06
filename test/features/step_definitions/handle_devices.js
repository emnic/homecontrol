'use strict';

var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect = chai.expect;


// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

module.exports = function() {
  
  this.World = require("../support/world.js").World;
  
  this.Given(/^I'm in the device section$/, function (callback) {
    element(by.linkText('Devices')).click().then(function(){
      callback();
    });
  });

  this.When(/^I want to make a change or add a device$/, function (callback) {
    callback();
  });

  this.When(/^I want to create a new device$/, function (callback) {
    element(by.linkText('Edit')).click().then(function(){
      element(by.buttonText('Add Device')).click().then(function(){
        callback();
      });
    });
  });

  this.Then(/^the new device is added to the list of devices$/, function (callback) {
    var device = element(by.binding('device.hw_data.name'));

    device.getText().then(function(text) {
      expect(text).to.equal('NoName Device 1');
      callback();
    });
  });

  this.Given(/^there exist at least one device$/, function (callback) {
    element(by.linkText('Edit')).click().then(function(){
      element(by.buttonText('Add Device')).click().then(function(){
        callback();
      });
    });
  });

  this.When(/^I choose to remove a device$/, function (callback) {
    element(by.linkText('Edit')).click().then(function(){
      element(by.linkText('Edit')).click().then(function(){
        element(by.buttonText('Remove')).click().then(function(){
          callback();
        });
      });
    });
  });

  this.Then(/^the device is removed from the list of devices$/, function (callback) {
    // Verify that the element has been removed
    var EC = protractor.ExpectedConditions;
    var el = element(by.binding('device.name'));
    return browser.wait(EC.not(EC.presenceOf(el)));
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

  this.When(/^I choose to make updates on the device and press "([^"]*)"$/, function (button, callback) {
    element(by.linkText('Edit')).click().then(function(){
      element(by.linkText('Edit')).click().then(function(){
        element(by.buttonText(button)).click().then(function(){
          callback();
        });
      });
    });
  });

  this.Then(/^the updates are "([^"]*)" on the device$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there exist one schedule one a timer$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};