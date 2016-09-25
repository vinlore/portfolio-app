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
        controller: 'BioCtrl',
        templateUrl: 'components/home/bio/bio.html',
        controllerAs: 'vm'
    })

    .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'components/home/portfolio/portfolio.html'
    })

    .state('preview', {
        url: '/portfolio/:project',
        templateUrl: 'components/home/portfolio/previews/previews.html',
        controller: 'PreviewsCtrl',
        controllerAs: 'vm'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'components/about/about.html'
    })

    $urlRouterProvider.otherwise('');


})