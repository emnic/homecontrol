var telldus = require('telldus');

module.exports = {
  on_off: function(device) {
    if (device.state === true) {
      telldus.turnOn(202,function(err) {
        console.log('device is now ON');
      });
    }
    else {
      telldus.turnOff(202,function(err) {
        console.log('deviceId is now OFF');
      });
    }
  }
}