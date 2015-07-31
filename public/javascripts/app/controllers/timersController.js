(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('timersController', timersController)
        .factory('timers', ['$http', function($http){
            var factory = {};
            factory.getAll = function() {
                return $http.get('/timers');
            };
            return factory;
        }]);


    timersController.$inject = ['resolvedTimers', 'timers'];

    function timersController(resolvedTimers, timers) {

      var vm = this;
      vm.list_of_timers = resolvedTimers.data;
      activate();

      function activate() { }

      vm.Items = [{Name: "M"}, {Name: "T"}, {Name: "W"}, {Name: "T"},
                  {Name: "F"}, {Name: "S"},{Name: "S"}];

      vm.checkAll = function () {
          if (vm.selectedAll) {
              vm.selectedAll = true;
          } else {
              vm.selectedAll = false;
          }
          angular.forEach(vm.Items, function (item) {
              item.Selected = vm.selectedAll;
          });
      };

      vm.addTimer = function () {
        var num_timers = vm.list_of_timers.length + 1
        vm.list_of_timers.push(
        { name: "NoName Timer " + num_timers,
          schedules:[]
        })
        console.log('Timer Added');
      };

      vm.removeTimer = function (timer) {
          var num_timers = vm.list_of_timers.length - 1
          var index = vm.list_of_timers.indexOf(timer);
          vm.list_of_timers.splice(index, 1);
      };

      vm.addSchedule = function (schedules) {
        var num_schedules = schedules.length + 1;
        schedules.push(
          { name: "NoName Schedule " + num_schedules,
            on_time: "12:00",
            on_variation: "10",
            off_time: "12:00",
            off_variation: "20",
            days: [ {name: "Mon", value: "false"},
                    {name: "Tue", value: "false"},
                    {name: "Wed", value: "false"},
                    {name: "Thu", value: "false"},
                    {name: "Fri", value: "false"},
                    {name: "Sat", value: "false"},
                    {name: "Sun", value: "false"}
                  ]
          })
      };
    }
})();