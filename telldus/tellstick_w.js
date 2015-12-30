var telldus = require('telldus');
var winston = require('winston');

module.exports = {
  on_off: function(device) {
    console.log(device)
    if (device.state === true) {
      telldus.turnOn(202,function(err) {
        winston.info('Device: '+' is turned ON');
      });
    }
    else {
      telldus.turnOff(202,function(err) {
        winston.info('Device: '+' is turned OFF');
      });
    }
  }
}