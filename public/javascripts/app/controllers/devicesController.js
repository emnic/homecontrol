(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('devicesController', devicesController)
        .factory('devices', ['$http', function($http){
            var factory = {};
            factory.getAll = function() {
                return $http.get('/devices');
            };
            return factory;
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
          vm.list_of_devices.push(
          { name: "NoName Device " + num_devices,
            timers:null
          })
        };

        vm.removeDevice = function (device) {
          var num_devices = vm.list_of_devices.length - 1
          var index = vm.list_of_devices.indexOf(device);
          vm.list_of_devices.splice(index, 1);
        };

        vm.saveDevice = function () {
          console.log('Save');
        };
    }
})();