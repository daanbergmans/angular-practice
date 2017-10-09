angular.module("myApp")

  .service("EmployeeService", ["$http", function($http) {

    this.getEmployees = function() {
      $http({
        method : "GET",
        url : "http://localhost:9000/employees"
      }).then(function mySuccess(response) {
        return response.data;
      }, function myError(response) {
        return -1;
      });
    }

  });
