(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('logsController', logsController)
        .factory('logs', ['$http', function($http){
            var factory = {};
            factory.getAll = function() {
                return $http.get('/logfile');
            };
            return factory;
        }]);

    logsController.$inject = ['resolvedLogs', 'logs'];

    function logsController(resolvedLogs, logs) {
        var vm = this;
        vm.logfile = resolvedLogs.data;
        activate();

        function activate() { }
    }
})();