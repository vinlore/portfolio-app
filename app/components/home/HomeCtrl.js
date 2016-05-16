app = angular.module('HomeCtrl', []);

app.controller('HomeCtrl', function (filterFilter, $http, $timeout) {

    var vm = this;

    vm.queryCourses = '';
    vm.courses = [];
    vm.showCourses = true;
    vm.showBio = true;
    vm.showEducation = true;

    vm.loadCourses = function () {
        $http.get('components/home/Courses.json').success(data => 
            vm.courses = data);
    };

})