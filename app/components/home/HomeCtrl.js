app = angular.module('HomeCtrl', []);

app.controller('HomeCtrl', function (filterFilter, $http, $timeout) {

    var vm = this;

    vm.queryCourses = '';
    vm.courses = [];
    vm.showCourses = true;
    vm.showBio = true;
    vm.showEducation = true;
    vm.showProjects = false;

    vm.loadCourses = function () {
        $http.get('components/home/Courses.json').success(data => 
            vm.courses = data);
    };

    vm.toggleProjects = function () {
        vm.showBio = !vm.showBio;
        vm.showEducation = !vm.showEducation;
        $timeout(function () {
            vm.showProjects = !vm.showProjects;
        }, 800);
    };

})