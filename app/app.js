'use strict';

angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'HomeCtrl'
])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('home', {
        url:'',
        abstract: true,
        templateUrl: 'shared/header.html'
    })

    .state('home.bio', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'components/home/home.html',
        controllerAs: 'vm'
    })

    .state('home.portfolio', {
        url: '/portfolio',
        templateUrl: 'components/home/portfolio.html'
    })

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

})