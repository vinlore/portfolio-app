'use strict';

angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate',
    'HomeCtrl'
])

.config(function ($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'components/home/home.html',
        controllerAs: 'vm'
    })

    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

})