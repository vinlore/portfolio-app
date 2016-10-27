var app = angular.module('PortfolioCtrl', [])

app.controller('PortfolioCtrl', function ($http) {
    
    var vm = this;
    vm.portfolio = [];

    vm.loadPortfolio = function () {
        $http.get('components/portfolio/portfolio.json').success(data => 
            vm.portfolio = data);
    };

})