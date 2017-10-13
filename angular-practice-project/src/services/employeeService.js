angular.module("myApp")

  .service("EmployeeService", ["$http", function($http) {

    const baseURL = "http://localhost:9000/employees";
    const config = { headers : { 'Content-Type' : 'application/json' } };

    this.addEmployee = function(employee) {
        $http({
          method : "POST",
          url : baseURL,
          data : employee
        }).then(function mySuccess(response) {
          return response.data;
        }, function myError(response) {
          return -1;
        });
    }

    this.getEmployees = function() {
      $http({
        method : "GET",
        url : baseURL
      }).then(function mySuccess(response) {
        return response.data;
      }, function myError(response) {
        return -1;
      });
    }

    this.removeEmployee = function(employee) {
      $http({
        method : "DELETE",
        url : baseURL + '/' + employee.id
      }).then(function mySuccess(response) {
        return response.data;
      }, function myError(response) {
        return -1;
      });
    }

  }]);
