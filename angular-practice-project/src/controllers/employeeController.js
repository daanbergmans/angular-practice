angular.module("myApp")

  .controller("EmployeeController", ["EmployeeService", function(EmployeeService) {
    var vm = this;

    /* API CALLS */

    let availableEmployees = EmployeeService.getEmployees();

    /* ANGULAR VARIABLE ASSIGNMENTS */

    vm.employees = availableEmployees >= 1 ? availableEmployees : [];

    /* FUNCTION ASSIGNMENTS */

    vm.addEmployee = addEmployee;
    vm.removeEmployee = removeEmployee;

    /* FUNCTIONS */

    function addEmployee() {
      vm.employeeExists = false;

      vm.employees.forEach(function (employee) {
        if (vm.employeeId === employee.employeeId) {
          vm.employeeExists = true;
          return;
        }
      });

      if (!vm.employeeExists) {
        let currentEmployee = { "employeeId" : vm.employeeId, "name" : vm.name, "age" : vm.age, "salary" : vm.salary }

        vm.employees.push(currentEmployee);
        EmployeeService.addEmployee(currentEmployee);
        vm.employeeId = "";
        vm.name = "";
        vm.age = "";
        vm.salary = "";
      }

    }

    function removeEmployee(id) {
      vm.employees.forEach(function(employee, index) {
        if (employee.employeeId === id) {
          vm.employees.splice(index, 1);
        }
      });
    }

  }]);
