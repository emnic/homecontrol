'use strict';

var baseUrl = 'http://127.0.0.1:3000/'
var request = require('request');
var expect = require('chai').expect;
var request = require('sync-request');


module.exports = function() {
  
  this.World = require("../support/world.js").World; 
  
  this.Given(/^the server is responsive$/, function (callback) {
    
    var res = request('GET',baseUrl);

    expect(res.statusCode).to.equal(200);

    callback();
  });

  this.When(/^I send a request to get all devices$/, function (callback) {
    // All action take place in the Then function
    callback();
  });

  this.Then(/^I get a comlete list of all devices$/, function (callback) {
    var allDevices = {device_name_1: 'Köket', device_name_2: 'Vardagsrummet'};

    var res = request('GET', baseUrl + 'devices');
    
    expect(res.statusCode).to.equal(200);     
    expect(res.getBody().toString()).to.equal(JSON.stringify(allDevices));
    
    callback();
  });

  this.When(/^I send a request to get all timers$/, function (callback) {
      callback();
  });

  this.Then(/^I get all timers$/, function (callback) {
    var allTimers = {timer_name_1: 'Insidan', timer_name_2: 'Utsidan'};

    var res = request('GET', baseUrl + 'timers');
    
    expect(res.statusCode).to.equal(200);      
    expect(res.getBody().toString()).to.equal(JSON.stringify(allTimers));
    
    callback();
  });


  this.When(/^I have created a new timer and wants to save it$/, function (callback) {
    this.testData = {'timer_1':'Timer object'};
    var res = request('POST', baseUrl + 'timers', { json: this.testData});
  
    expect(res.statusCode).to.equal(200);   
    callback();
  });

  this.Then(/^it is saved in the list of timers$/, function (callback) {

    var res = request('GET', baseUrl + 'timers');
    
    expect(res.statusCode).to.equal(200);      
    expect(res.getBody().toString()).to.equal(JSON.stringify(this.testData));

    callback();
  });
  
  this.When(/^I have created a timer and wants to update it$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^it is updated and saved in the list of timers$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
  this.When(/^I send a request to remove a timer from the list of timers$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the timer is removed from the list$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I send a request to get the log file$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I get the logfile$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.After(function(callback) {
    //console.log('Cleaning up');   
    callback();
  });
    
};