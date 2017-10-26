// I'm unable to explain the difference between a service and a factory, but they have the same objective. Providing
// data/functionality outside of the controllers. However, in my opinion, factories are easier to use when making calls
// to a REST-service

// Get the 'myApp' module
angular.module("myApp")

  // Inject the http dependency (this is part of the part which didn't work yet, considering the REST-service is not up yet)
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

  // Go to services/testDataService
