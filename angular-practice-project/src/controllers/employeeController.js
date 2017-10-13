angular.module("myApp")

  .controller("EmployeeController", ["EmployeeFactory", function(EmployeeFactory) {
    let vm = this;

    /* INITIALIZATION */

    getEmployees();

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
        EmployeeFactory.addEmployee(currentEmployee);

        getNewId();

        vm.name = "";
        vm.age = "";
        vm.salary = "";

        vm.showSeparation = true;
      }
    }

    function removeEmployee(id) {
      vm.employees.forEach(function(employee, index) {
        if (employee.employeeId === id) {
          vm.showSeparation = vm.employees.length == 1 ? false : true;
          vm.employees.splice(index, 1);
          EmployeeFactory.removeEmployee(employee);
          getNewId();
          return;
        }
      });
    }

    function getNewId() {
      let newId = 0;

      vm.employees.forEach(function(employee) {
        newId = Math.max(newId, employee.employeeId);
      });

      vm.employeeId = newId + 1;
    }

    function getEmployees() {
      EmployeeFactory.getEmployees().then(function (employees) {

        /* CHECKS */

        if (employees.data.length >= 1) {
          vm.employees = employees.data;
          vm.showSeparation = true;
        } else {
          vm.employees = [];
          vm.showSeparation = false;
        }

        /* INITIALIZATION */

        getNewId();

      }, function (error) {
        console.log(error);
      });
    }

  }]);
