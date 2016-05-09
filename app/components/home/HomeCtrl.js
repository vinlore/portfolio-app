app = angular.module('HomeCtrl', []);

app.controller('HomeCtrl', function (filterFilter, $http) {

    var vm = this;

    vm.queryCourses = '';
    vm.courses = [];
    vm.isCourses = true;

    vm.loadCourses = function () {
        $http.get('components/home/Courses.json').success(data => 
            vm.courses = data);
    }
    
})