angular.module("myApp")

  .service("EmployeeService", ["$http", function($http) {

    const baseURL = "http://localhost:9000/employees";
    const config = { headers : { 'Content-Type' : 'application/json' } };

    this.addEmployee = function(employee) {
      // $http.post(baseURL, employee, config).then(
      //      function(data, status, headers){
      //        console.log(data);
      //      },
      //      function(data, status, headers){
      //        return status;
      //      }
      //   );
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
      // $http.get(baseURL, config).then(
      //   function(data, status, headers) {
      //     return data;
      //   },
      //   function(data, status, headers) {
      //     return status;
      //   }
      // );
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
      // $http.delete(baseURL + '/' + employee.id).then(
      //   function(data, status, headers) {
      //     return data;
      //   },
      //   function(data, status, headers) {
      //     return status;
      //   }
      // );
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
