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
        activate();

        function activate() { }
    }
})();