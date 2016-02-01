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
                return $http.get('/devices').success(function(data){
                  o.devices = angular.copy(data);
                });
            };

            o.create = function(post) {
              return $http.post('/devices', post).success(function(data){
                o.devices.push(data);
              });
            };
          
            o.update = function(device) {
              return $http.put('/devices/' + device._id, device).success(function(data){
                var index = o.devices.indexOf(device);
                o.devices[index] = data;
              });
            };

            o.delete = function(device) {
              return $http.delete('/devices/' + device._id).success(function(data){
                var index = o.devices.indexOf(device);
                o.devices.splice(index, 1);
              });
            };

            o.change_state = function(device) {

              return $http.put('/devices/' + device._id + '/state', {state: device.state}).success(function(data){
                var index = o.devices.indexOf(device);
                o.devices[index] = data;
              });
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
          var device = {
                          hw_data: {
                                      id: "111",
                                      name: "NoName Device " + num_devices,
                                      controller: "0",
                                      protocol: "arctech",
                                      model: "selflearning-switch:nexa",
                                      house: "1111",
                                      unit: "1",
                          },
                        state: "false",
                        timers:null
                       };
          devices.create(device);
          vm.list_of_devices = devices.devices;
        };
      
        vm.saveDevice = function (device) {
          devices.update(device);
          vm.list_of_devices = devices.devices;
        };
      
        vm.removeDevice = function (device) {
          var num_devices = vm.list_of_devices.length - 1

          devices.delete(device);
          vm.list_of_devices = devices.devices;
        };

        vm.changeState = function (device) {
          device.state = !device.state
          devices.change_state(device);
          vm.list_of_devices = devices.devices;
        };
    }
})();