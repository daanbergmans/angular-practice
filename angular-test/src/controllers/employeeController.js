angular.module("myApp")

  .controller("EmployeeController", [function() {
    var vm = this;

    vm.employees = []

    vm.addEmployee = function() {
      vm.employees.push({"ID" : vm.ID, "name" : vm.name, "age" : vm.age});
    }

  }]);
