'use strict';

var baseUrl = 'http://127.0.0.1:3000/'

var expect = require('chai').expect;
var request = require('sync-request');
var config = require('../../../config');
var mongoose = require('mongoose');
var Timers_model = require('../../../models/timers.js');
var Devices_model = require('../../../models/devices.js');


// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';


module.exports = function() {
  
  this.World = require("../support/world.js").World; 
  
  this.Given(/^the server is responsive$/, function (callback) {
    
    var res = request('GET',baseUrl);
    expect(res.statusCode).to.equal(200);

    callback();
  });
  
  this.Given(/^theere is a device saved$/, function (callback) {
      // Prepare database with testdata
    this.testData = { name: 'Device1', timers:null}
    var device = new Devices_model(this.testData);

    device.save(function(err,data){
      if(err)return console.error(err);
        
      callback();
    }); 
  });

  this.When(/^I send a request to get all devices$/, function (callback) {
    
    var res = request('GET', baseUrl + 'devices');
    expect(res.statusCode).to.equal(200);
    
    this.res = res;
    
    callback();
  });

  this.Then(/^I get a comlete list of all devices$/, function (callback) {
             
    // Get body and parse it as JSON
    var body = this.res.getBody()
    var json = JSON.parse(body);

    // Get variables in json and parse it to string for comparison
    var name = json[0].name;
    
    // Compare with post data
    expect(name).to.equal(this.testData.name);

    callback();
  });
  
  this.Given(/^there is a timer saved$/, function (callback) {
    
    // Prepare database with testdata
    this.testData = { name: 'Sched1', schedule: {on_time: '12:00', off_time: '13:00'}}
    var timer = new Timers_model(this.testData);
  
    timer.save(function(err,data){
      if(err)return console.error(err);
        
      callback();
    });  
  });
  
  this.When(/^I send a request to get all timers$/, function (callback) {
    
    this.res = request('GET', baseUrl + 'timers');
    expect(this.res.statusCode).to.equal(200);  

    callback();
  });

  this.Then(/^I get all timers$/, function (callback) {
    
    // Get body and parse it as JSON
    var body = this.res.getBody()
    var json = JSON.parse(body);
    
    // Get variables in json and parse it to string for comparison
    var name = JSON.stringify(json[0].name);
    var on_time = JSON.stringify(json[0].schedule[0].on_time);
    var off_time = JSON.stringify(json[0].schedule[0].off_time);
    
    // Compare with post data
    expect(name).to.equal(JSON.stringify(this.testData.name));
    expect(on_time).to.equal(JSON.stringify(this.testData.schedule.on_time));
    expect(off_time).to.equal(JSON.stringify(this.testData.schedule.off_time));
    
    callback();
  });

  this.Given(/^I have created a new timer and wants to save it$/, function (callback) {
    
    this.testData = { name: 'Sched1', schedule: {on_time: '12:00', off_time: '13:00'}}
     
    callback();
  });
  
  this.When(/^I send a request to save the timer$/, function (callback) {
    
    var res = request('POST', baseUrl + 'timers', { json: this.testData});  
    expect(res.statusCode).to.equal(200);
    
    callback();
  });
  
  this.Then(/^it is saved in the list of timers$/, function (callback) {

    var testData = this.testData
    
    Timers_model.find(function (err, timers) {
      if (err) return next(err);

      // Get variables in json and parse it to string for comparison
      var name = JSON.stringify(timers[0].name);
      var on_time = JSON.stringify(timers[0].schedule[0].on_time);
      var off_time = JSON.stringify(timers[0].schedule[0].off_time);

      // Compare with post data
      expect(name).to.equal(JSON.stringify(testData.name));
      expect(on_time).to.equal(JSON.stringify(testData.schedule.on_time));
      expect(off_time).to.equal(JSON.stringify(testData.schedule.off_time));
      
      callback();
    });
  });
  
  this.When(/^I have made changes to the timer$/, function (callback) {
    var id = 0;

    Timers_model.find(function (err, timers) {
      if (err) return next(err);

      // Get variables in json and parse it to string for comparison
      id = timers[0]._id;
      var on_time = timers[0].schedule[0].on_time = '10:00'
      
      var res = request('PUT', baseUrl + 'timers/' + id + '/ontime', { json: {on_time:'10:00'}});
      expect(res.statusCode).to.equal(200);
      
      callback();
    });
  });

  this.Then(/^it is updated and saved in the list of timers$/, function (callback) {

    Timers_model.find(function (err, timers) {
      if (err) return next(err);

      // Get variables in json and parse it to string for comparison
      var on_time = timers[0].schedule[0].on_time;
      
      expect('10:00').to.equal(on_time);
      
      callback();
    });
  });
  
  this.When(/^I send a request to remove a timer from the list of timers$/, function (callback) {
    
    var id = 0;
    
    Timers_model.find(function (err, timers) {
      if (err) return next(err);

      // Get variables in json and parse it to string for comparison
      id = timers[0]._id;
      var res = request('DELETE', baseUrl + 'timers/' + id);
      
      callback();
    });
  });

  this.Then(/^the timer is removed from the list$/, function (callback) {
    Timers_model.find(function (err, timers) {
      if (err) return next(err);
      
      // There should be no timers in the list
      expect(JSON.stringify(timers)).to.equal(JSON.stringify([]));    
      callback();
    });
  });

  this.Given(/^there exist a logfile on server$/, function (callback) {
    // Add code here to actually write to a logfile
    callback();
  });

  this.When(/^I send a request to get the log file$/, function (callback) {
    
    var res = request('GET', baseUrl + 'logfile');
    
    this.testData = res.getBody();
    expect(res.statusCode).to.equal(200);     
    
    callback();
  });

  this.Then(/^I get the logfile$/, function (callback) {
    
    expect(this.testData.length).to.be.above(0);
    
    callback();
  });

  this.Before(function(callback) {
    function clearDB() {
      
      for (var i in mongoose.connection.collections) {
        
        mongoose.connection.collections[i].remove(function() {});
        
      }
      return callback();
    }

    if (mongoose.connection.readyState === 0) {
      mongoose.connect(config.db.test, function (err) {
        
        if (err) {
          throw err;
        }
        
        return clearDB();
      });
    } 
    else {
      return clearDB();
    }
  });

  this.After(function(callback) {  
    mongoose.disconnect();
    callback();
  });
    
};