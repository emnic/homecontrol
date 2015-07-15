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
        /* jshint validthis:true */

        var vm = this;
        vm.list_of_timers = resolvedTimers.data;
      console.log(vm);
        activate();

        function activate() { }
        
        /*vm.Items = [{Name: "Mon"}, {Name: "Tue"}, {Name: "Wed"}, {Name: "Thu"},
                    {Name: "Fri"}, {Name: "Sat"},{Name: "Sun"}];*/

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
    }
})();