var app = angular.module('DemoCtrl', []);

app.controller('DemoCtrl', function ($location, $stateParams) {

    var vm = this;

    vm.project = $location.host() + '/' + $stateParams.project;

})