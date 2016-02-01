'use strict';

var request = require('request');
var expect = require('chai').expect;

var World = function World(callback) {

  this.serverCall = function() {
     request(baseUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        expect(response.statusCode).to.equal(201);
      }
    
    })
  };
  
  this.testData = {};
  this.res ={};
  
  callback();

};

module.exports.World = World;