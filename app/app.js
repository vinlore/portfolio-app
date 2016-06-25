'use strict';

angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'BioCtrl',
    'PreviewsCtrl',
    'DemoCtrl'
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
        controller: 'BioCtrl',
        templateUrl: 'components/home/bio/bio.html',
        controllerAs: 'vm'
    })

    .state('home.portfolio', {
        url: '/portfolio',
        templateUrl: 'components/home/portfolio/portfolio.html'
    })

    .state('home.preview', {
        url: '/portfolio/:project',
        templateUrl: 'components/home/portfolio/previews/previews.html',
        controller: 'PreviewsCtrl',
        controllerAs: 'vm'
    })

    .state('demo', {
        url: '/demo/:project',
        templateUrl: 'components/demo/demo.html',
        controller: 'DemoCtrl',
        controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/');


})