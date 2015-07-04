(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('timersController', timersController);

    timersController.$inject = ['resolvedTimers'];

    function timersController(resolvedTimers) {
        /* jshint validthis:true */
        var vm = this;
        vm.list_of_timers = resolvedTimers.data;
        activate();

        function activate() { }
    }
})();