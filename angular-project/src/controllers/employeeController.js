angular.module("myApp")

  .controller("EmployeeController", function() {
    var vm = this;

    vm.employees = []

    vm.addEmployee = function() {
      vm.employeeExists = false;

      vm.employees.forEach(function (employee) {
        if (vm.ID === employee.ID) {
          vm.employeeExists = true;
          return;
        }
      });

      if (!vm.employeeExists) {
        vm.employees.push({"ID" : vm.ID, "name" : vm.name, "age" : vm.age});
        vm.ID = "";
        vm.name = "";
        vm.age = "";
      }

    }

    vm.removeEmployee = function(id) {
      vm.employees.forEach(function(employee, index) {
        if (employee.ID === id) {
          vm.employees.splice(index, 1);
        }
      });
    }

  });
