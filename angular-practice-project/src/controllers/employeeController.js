angular.module("myApp")

  .controller("EmployeeController", ["EmployeeService", function(EmployeeService) {
    var vm = this;

    /* ANGULAR VARIABLE ASSIGNMENTS */

    vm.employees = [];

    /* FUNCTION ASSIGNMENTS */

    vm.addEmployee = addEmployee;
    vm.removeEmployee = removeEmployee;

    /* API CALLS */

    let availableEmployees = EmployeeService.getEmployees();

    vm.employees = availableEmployees >= 1 ? availableEmployees : [];

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
        let currentEmployee = { "employee_id" : vm.employee_id, "name" : vm.name, "age" : vm.age, "salary" : vm.salary }

        vm.employees.push(currentEmployee);
        EmployeeService.addEmployee(currentEmployee);
        vm.employee_id = "";
        vm.name = "";
        vm.age = "";
        vm.salary = "";
      }

    }

    function removeEmployee(id) {
      vm.employees.forEach(function(employee, index) {
        if (employee.employee_id === id) {
          vm.employees.splice(index, 1);
        }
      });
    }

  }]);
