'use strict';

angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'BioCtrl',
    'PreviewsCtrl'
])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('home', {
        url:'/',
        controller: 'BioCtrl',
        templateUrl: 'components/home/bio/bio.html',
        controllerAs: 'vm'
    })

    .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'components/portfolio/portfolio.html'
    })

    .state('preview', {
        url: '/portfolio/:project',
        templateUrl: 'components/previews/previews.html',
        controller: 'PreviewsCtrl',
        controllerAs: 'vm'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'components/about/about.html'
    })

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

})