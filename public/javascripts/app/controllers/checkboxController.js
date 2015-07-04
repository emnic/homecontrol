(function () {
    'use strict';

    angular
        .module("homeControl")
        .controller("checkboxController", function checkboxController($scope) {


        $scope.Items = [{
            Name: "Mon"
        }, {
            Name: "Tue"
        }, {
            Name: "Wed"
        }, { 
            Name: "Thu"
        }, {
            Name: "Fri"
        }, {
            Name: "Sat"
        },{
            Name: "Sun"
        }];
        $scope.checkAll = function () {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.Items, function (item) {
                item.Selected = $scope.selectedAll;
            });

        };
    });
})();