'use strict';
/*
{ "name": "Timer 1",
  "schedules":[{ "name": "Schedule 1",
                "on_time": "10:00",
                "on_variation": "10",
                "off_time": "13:00",
                "off_variation": "20",
                "days": [ {"name": "Mon", "value": "false"},
                          {"name": "Tue", "value": "true"},
                          {"name": "Wed", "value": "false"},
                          {"name": "Thu", "value": "true"},
                          {"name": "Fri", "value": "false"},
                          {"name": "Sat", "value": "true"},
                          {"name": "Sun", "value": "false"}
                        ]
               }]
}
*/
var baseUrl = 'http://127.0.0.1:3000/'

var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect =chai.expect;
var request = require('sync-request');
var config = require('../../../config');
var mongoose = require('mongoose');
var Timers_model = require('../../../models/timers.js');
var Devices_model = require('../../../models/devices.js');


// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';
var test_schedule = { name: 'Schedule 1',
                      on_time: '12:00', 
                      on_variation: '10',
                      off_time: '13:00',
                      off_variation: '20',
                      days: [{name: 'Mon', value: false},
                            {name: 'Tue', value: true},
                            {name: 'Wed', value: false},
                            {name: 'Thu', value: true},
                            {name: 'Fri', value: false},
                            {name: 'Sat', value: true},
                            {name: 'Sun', value: false}
                            ]
                     }

module.exports = function() {
  
  this.World = require("../support/world.js").World; 
    
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

    this.testData = { name: 'Sched1', schedules: test_schedule}
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
    var name = json[0].name;
    var sched = json[0].schedules[0];
    
    // Compare with post data
    expect(name).to.equal(this.testData.name);
    expect(sched.on_time).to.equal(this.testData.schedules.on_time);
    expect(sched.on_variation).to.equal(this.testData.schedules.on_variation);
    expect(sched.off_time).to.equal(this.testData.schedules.off_time);
    expect(sched.off_variation).to.equal(this.testData.schedules.off_variation);
    
    // Check days array
    for (var i in sched.days) {
        expect(sched.days[i].name).to.equal(this.testData.schedules.days[i].name);
        expect(sched.days[i].value).to.equal(this.testData.schedules.days[i].value);
    }
 
    callback();
  });

  this.Given(/^I have created a new timer and wants to save it$/, function (callback) {
    
    this.testData = { name: 'Sched1', schedules: test_schedule}
     
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
      var name = timers[0].name;
      var sched = timers[0].schedules[0];

      // Compare with post data
      expect(name).to.equal(testData.name);
      expect(sched.on_time).to.equal(testData.schedules.on_time);
      expect(sched.on_variation).to.equal(testData.schedules.on_variation);
      expect(sched.off_time).to.equal(testData.schedules.off_time);
      expect(sched.off_variation).to.equal(testData.schedules.off_variation);

      // Check days array
      for (var i in testData.schedules.days) {
        expect(sched.days[i].name).to.equal(testData.schedules.days[i].name);
        expect(sched.days[i].value).to.equal(testData.schedules.days[i].value);
      }
      
      callback();
    });
  });
  
  this.When(/^I have made changes to the timer$/, function (callback) {
    var id = 0;

    Timers_model.find(function (err, timers) {
      if (err) return next(err);

      // Get variables in json and parse it to string for comparison
      id = timers[0]._id;
      //var on_time = timers[0].schedules[0].on_time = '10:00'
      
      var res = request('PUT', baseUrl + 'timers/' + id + '/ontime', { json: {on_time:'10:00'}});
      expect(res.statusCode).to.equal(200);
      
      callback();
    });
  });

  this.Then(/^it is updated and saved in the list of timers$/, function (callback) {

    Timers_model.find(function (err, timers) {
      if (err) return next(err);

      // Get variables in json and parse it to string for comparison
      var on_time = timers[0].schedules[0].on_time;
      
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