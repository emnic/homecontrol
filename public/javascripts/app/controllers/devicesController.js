(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('devicesController', devicesController);

    devicesController.$inject = ['resolvedDevices'];

    function devicesController(resolvedDevices) {
        /* jshint validthis:true */
        var vm = this;
        vm.list_of_devices = resolvedDevices.data;
        activate();

        function activate() { }
    }
})();