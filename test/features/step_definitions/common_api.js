var baseUrl = 'http://127.0.0.1:3000/'
var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect = chai.expect;
var request = require('sync-request');

module.exports = function() {
  
  this.World = require("../support/world.js").World;
  
  this.Given(/^the server is responsive$/, function (callback) {
      //browser.get(baseUrl);
      //console.log(browser.getTitle());
      var res = request('GET',baseUrl);
      expect(res.statusCode).to.equal(200);

      callback();
  });
};