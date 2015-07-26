(function () {
    'use strict';

    angular
        .module('homeControl')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home/devices');
        $stateProvider
            .state("home", {
                'abstract': true,
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                resolve: { resolvedDevices: function($http){
                    return $http.get('http://127.0.0.1:3000/timers')
                        .success(function(response) {
                            return response;
                        })
                    }
                },
                controllerAs: 'vm'
            })
            .state("home.devices", {
                url: '/devices',
                templateUrl: 'templates/devices.html',
                controller: 'devicesController',
                resolve: {
                    resolvedDevices: ['devices', function(devices){
                        return devices.getAll();
                    }],
                    resolvedTimers: ['timers', function(timers){
                        return timers.getAll();
                    }]
                },
                controllerAs: 'vm'
            })
            .state("home.timers", {
                url: '/timers',
                templateUrl: 'templates/timers.html',
                controller: 'timersController',
                resolve: {
                    resolvedTimers: ['timers', function(timers){
                        return timers.getAll();
                    }]
                },
                controllerAs: 'vm'
            })
            .state("home.settings", {
                url: '/settings',
                templateUrl: 'templates/settings.html',
                controller: 'settingsController',
                controllerAs: 'vm'
            })
    }    

    run.$inject = ['$rootScope', '$state', '$stateParams'];

    function run($rootScope, $state, $stateParams) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toStateParams, fromState, fromStateParams) {
                $rootScope.fromState = fromState;
                $rootScope.fromStateParams = fromStateParams;
                $rootScope.toState = toState;
                $rootScope.toStateParams = toStateParams;
            });

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    };
})();