(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('projectsController', projectsController);

    projectsController.$inject = ['resolvedExpenses'];

    function projectsController(resolvedExpenses) {
        /* jshint validthis:true */
        var vm = this;
        vm.list_of_devices = resolvedExpenses;
        activate();

        function activate() { }
    }
})();