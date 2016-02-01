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

  this.Given(/^the homecontrol user interface is displayed$/, function (callback) {
    browser.get('/');

    expect(browser.getTitle()).to.eventually.equal('Home Control').and.notify(callback);
  });

  this.Then(/^I enter edit mode to make changes$/, function (callback) {
    element(by.linkText('Edit')).click().then(function(){
      callback();
    });
  });

  this.Then(/^close edit mode when the changes are done$/, function (callback) {
    element(by.linkText('Close')).click().then(function(){
      callback();
    });
  });
};