(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('devicesController', devicesController)
        .factory('devices', ['$http', function($http){
            var o = {
              devices: []
            };

            o.getAll = function() {
                return $http.get('/devices');
            };

            o.create = function(post) {
              return $http.post('/devices', post).success(function(data){
                o.devices.push(data);
              });
            };
            o.delete = function(deviceId) {
              return $http.delete('/devices', {id: deviceId});
            };

            return o;
        }]);

    devicesController.$inject = ['resolvedDevices', 'devices', 'resolvedTimers'];

    function devicesController(resolvedDevices, devices, resolvedTimers) {
        var vm = this;
        vm.list_of_devices = resolvedDevices.data;
        vm.list_of_timers = resolvedTimers.data;
        activate();

        function activate() { }

        vm.addDevice = function () {
          var num_devices = vm.list_of_devices.length + 1
          var device = {name: "NoName Device " + num_devices,
                        timers:null
                        };
          vm.list_of_devices.push(device);

          devices.create(device);
        };

        vm.removeDevice = function (device) {
          var num_devices = vm.list_of_devices.length - 1
          var index = vm.list_of_devices.indexOf(device);
          console.log(device);
          vm.list_of_devices.splice(index, 1);
          devices.delete(device._id);
        };

        vm.saveDevice = function () {
          console.log('Save');
        };
    }
})();