angular.module("myApp")

  .controller("EmployeeController", ["DataService", function(DataService) {
    var vm = this;

    /* LOCAL VARIABLE ASSIGNMENTS */

    var availableEmployees = DataService.getEmployees();

    /* ANGULAR VARIABLE ASSIGNMENTS */

    vm.employees = [];

    if (availableEmployees.length >= 1) {
      vm.employees = DataService.getEmployees();
    }

    /* FUNCTION ASSIGNMENTS */

    vm.addEmployee = addEmployee;
    vm.removeEmployee = removeEmployee;

    /* FUNCTIONS */

    function addEmployee() {
      vm.employeeExists = false;

      vm.employees.forEach(function (employee) {
        if (vm.ID === employee.ID) {
          vm.employeeExists = true;
          return;
        }
      });

      if (!vm.employeeExists) {
        var currentEmployee = { "ID" : vm.ID, "name" : vm.name, "age" : vm.age, "salary" : vm.salary }

        vm.employees.push(currentEmployee);
        DataService.addEmployee(currentEmployee);
        vm.ID = "";
        vm.name = "";
        vm.age = "";
        vm.salary = "";
      }

    }

    function removeEmployee(id) {
      vm.employees.forEach(function(employee, index) {
        if (employee.ID === id) {
          vm.employees.splice(index, 1);
        }
      });
    }

  }]);
