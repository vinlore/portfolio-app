app = angular.module('BioCtrl', []);

app.controller('BioCtrl', function (filterFilter, $http, $timeout) {

    var vm = this;

    vm.queryCourses = '';
    vm.courses = [];
    vm.showCourses = true;

    vm.loadCourses = function () {
        $http.get('components/home/bio/Courses.json').success(data => 
            vm.courses = data);
    };

})