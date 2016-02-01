(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('timersController', timersController)
        .factory('timers', ['$http', function($http){
            var o = {
              timers: []
            };

            o.getAll = function() {
                return $http.get('/timers').success(function(data){
                  o.timers = angular.copy(data);
                });
            };

            o.create = function(post) {
              return $http.post('/timers', post).success(function(data){
                console.log(data)
                o.timers.push(data);
              });
            };

            o.addSchedule = function(timer, schedule) {
              return $http.put('/timers/' + timer._id + '/add_schedule', schedule).success(function(data){
                var index = o.timers.indexOf(timer);
                o.timers[index] = data;
              });
            };

            o.deleteTimer = function(timer) {
              return $http.delete('/timers/' + timer._id).success(function(data){
                var index = o.timers.indexOf(timer);
                o.timers.splice(index, 1);
              });
            };

            return o;
        }]);


    timersController.$inject = ['resolvedTimers', 'timers'];

    function timersController(resolvedTimers, timers) {

      var vm = this;
      vm.list_of_timers = resolvedTimers.data;
      activate();

      function activate() { }

      vm.Items = [{Name: "M"}, {Name: "T"}, {Name: "W"}, {Name: "T"},
                  {Name: "F"}, {Name: "S"},{Name: "S"}];

      vm.addTimer = function () {
        var num_timers = vm.list_of_timers.length + 1
        
        var timer = {
          name: "NoName Timer " + num_timers,
          schedules:[]
        };

        timers.create(timer);
        vm.list_of_timers = timers.timers;
      };

      vm.removeTimer = function (timer) {
          var num_timers = vm.list_of_timers.length - 1
          
          timers.deleteTimer(timer);
          vm.list_of_timers = timers.timers;
      };

      vm.addSchedule = function (timer) {
        var num_schedules = timer.schedules.length + 1;
        var schedules = {
          name: "NoName Schedule " + num_schedules,
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
        };

        timers.addSchedule(timer,schedules);
        vm.list_of_timers = timers.timers;
      };

      vm.checkAll = function (days) {
        if (vm.selectedAll) {
            vm.selectedAll = true;
        } else {
            vm.selectedAll = false;
        }
        angular.forEach(days, function (day) {
            day.value = vm.selectedAll;
        });
      };

    }
})();