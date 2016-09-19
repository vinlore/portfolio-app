app = angular.module('PreviewsCtrl', []);

app.controller('PreviewsCtrl', function ($http, $stateParams, $state) {
    
    var vm = this;

    vm.project = {};

    vm.loadProject = function () {
        var url = 'components/home/portfolio/previews/' + $stateParams.project + '.json';
        $http.get(url)
        .then((data) => {
            vm.project = data.data
        }, (error) => {
            $state.go('portfolio');
        })
    };

})