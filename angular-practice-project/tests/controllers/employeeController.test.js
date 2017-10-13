describe('TestEmployeeController', function() {

  let $controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('should initiate with 0 employees', function() {
    let controller = $controller('EmployeeController', {$scope:{}});

    expect(controller.employees.length).toEqual(0);
  });

  it('should have 1 employee when a new employee is added', function() {
    let controller = $controller('EmployeeController', {$scope:{}});

    controller.addEmployee({ "employeeId" : 1, "name" : "Daan", "age" : 20, "salary" : 200000 });

    expect(controller.employees.length).toEqual(1);
  });

  it('should have 1 employee after adding 2 employees and removing 1 employee', function() {
    let controller = $controller('EmployeeController', {$scope:{}});

    controller.addEmployee({ "employeeId" : 1, "name" : "Daan", "age" : 20, "salary" : 200000 });
    controller.addEmployee({ "employeeId" : 2, "name" : "Jos", "age" : 40, "salary" : 400000 });

    controller.removeEmployee(1);

    expect(controller.employees.length).toEqual(1);
  });

  it('should return id 3 when employees with id 1 and 2 exist', function() {
    let controller = $controller('EmployeeController', {$scope:{}});

    controller.addEmployee({ "employeeId" : 1, "name" : "Daan", "age" : 20, "salary" : 200000 });
    controller.addEmployee({ "employeeId" : 2, "name" : "Jos", "age" : 40, "salary" : 400000 });

    expect(controller.employeeId).toEqual(3);
  });

});
