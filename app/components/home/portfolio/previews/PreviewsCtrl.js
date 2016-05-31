app = angular.module('PreviewsCtrl', []);

app.controller('PreviewsCtrl', function ($http, $stateParams) {
    
    var vm = this;

    vm.project = {};

    vm.loadProject = function () {
        var url = 'components/home/portfolio/previews/' + $stateParams.project + '.json';
        $http.get(url).success(data =>
            vm.project = data);
    };

})