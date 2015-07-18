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
  
  this.Given(/^the homecontrol userinterface is displayed$/, function (callback) {
    browser.get('/');

    expect(browser.getTitle()).to.eventually.equal('Home Control').and.notify(callback);
  });
};