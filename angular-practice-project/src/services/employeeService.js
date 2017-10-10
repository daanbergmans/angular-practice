angular.module("myApp")

  .service("EmployeeService", ["$http", function($http) {

    const baseURL = "http://localhost:9000/employees";
    const config = { headers : { 'Content-Type' : 'application/json' } };

    this.addEmployee = function(employee) {
      $http.post(baseURL, employee, config).then(
           function(data, status, headers, config){
             console.log(data.data);
           },
           function(data, status, headers, config){
             return status;
           }
        );
    }

    this.getEmployees = function() {

    }

    this.removeEmployee = function(employee) {

    }

  }]);
