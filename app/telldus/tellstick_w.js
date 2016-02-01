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
  },
  addDevice: function() {
    return telldus.addDeviceSync();
  },

  removeDevice: function(device){
    telldus.removeDevice(device.hw_data.id, function (err) {
      if (err) {
      console.error('Could not remove device, error code: ' + err);
      }
      console.log('Device %s (%s) removed', device.hw_data.id, device.hw_data.name);
    });
  },
  getDevices: function() {
    telldus.getDevices(function(err,devices) {
      if ( err ) {
        console.log('Error: ' + err);
      } else {
        // A list of all configured devices is returned
        console.log(devices);
      }
    });
  }
}