angular.module("myApp")

  .factory("EmployeeFactory", ["$http", function($http) {

    const baseURL = "http://localhost:9000/employees";

    let factory = {};

    factory.getEmployees = function() {
      return $http({
        method: 'GET',
        url: baseURL
      });
    };

    factory.addEmployee = function(employee) {
      return $http({
        method: 'POST',
        url: baseURL,
        data: employee
      });
    };

    factory.removeEmployee = function(employee) {
      return $http({
        method: 'DELETE',
        url: baseURL + '/' + employee._id
      })
    };

    return factory;

  }]);
