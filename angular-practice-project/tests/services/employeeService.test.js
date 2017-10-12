var EmployeeService;

describe('EmployeeService', function() {

  beforeEach(module('myApp'));

  beforeEach(inject(function(_EmployeeService_) {
    EmployeeService = _EmployeeService_;
  }));

  it ('should return employees', function() {
    expect(EmployeeService.getEmployees().length).toEqual(1);
  })

});
