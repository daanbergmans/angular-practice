angular.module("myApp", ["ngRoute"])

  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController',
            controllerAs: 'vm'
        })
        .when('/employee', {
          templateUrl: 'views/employee.html',
          controller: 'EmployeeController',
          controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
  }]);
