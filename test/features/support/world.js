'use strict';

//var GroceryList = require(process.cwd() + '/script/model/grocery-list');
var baseUrl = 'http://127.0.0.1:3000/'
var request = require('request');
var expect = require('chai').expect;

var World = function World(callback) {

  this.serverCall = function() {
    console.log('############')
     request(baseUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        expect(response.statusCode).to.equal(201);
        //expect(error).to.be.null;
        console.log('hej')
      }    
    
    })
  };
  
  this.testData = {};
  this.res ={};
  
  callback();

};

module.exports.World = World;