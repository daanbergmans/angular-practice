// This is the routing file, routes are linked with templates which should be used and the controllers which should interact
// with them. The controllerAs describes that the controllerAs-syntax should be used. Normally, $scope is used for using the
// controller. However, in my opinion, using this syntax and 'vm' (ViewModel) provides a cleaner view of what has been written.

//Set up the 'myApp' module with dependency 'ngRoute' (used for routing obviously)
angular.module("myApp", ["ngRoute"])

  //Configurate the 'myApp' module with a routeprovider (gotten from the ngRoute dependency)
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
        .when('/employee', {
          templateUrl: 'src/views/employee.html',
          controller: 'EmployeeController',
          controllerAs: 'vm'
        })
        .when('/shopping', {
          templateUrl: 'src/views/shopping.html',
          controller: 'ShoppingController',
          controllerAs: 'vm'
        })
        .when('/calculator', {
            templateUrl: 'src/views/calculator.html',
            controller: 'CalculatorController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'src/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
  }]);

  //Now go to controllers/homeController.js
