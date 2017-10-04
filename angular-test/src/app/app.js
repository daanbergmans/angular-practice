angular.module("myApp", ["ngRoute"])

  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/home', {
            templateUrl: 'src/views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'src/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'vm'
        })
        .when('/employee', {
          templateUrl: 'src/views/employee.html',
          controller: 'EmployeeController',
          controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
  }]);
