(function () {
    'use strict';

    angular
        .module('homeControl')
        .controller('TimepickerCtrl', function ($scope, $log) {
        
        var d = new Date();
        d.setHours( 12 );
        d.setMinutes( 0 );
        $scope.mytime = d;

        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.ismeridian = false;

        $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.mytime);
      };
    });
})();