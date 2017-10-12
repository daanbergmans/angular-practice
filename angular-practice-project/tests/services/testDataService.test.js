describe('TestTestDataService', function() {

  let TestDataService;

  beforeEach(module('myApp'));

  beforeEach(inject(function(_TestDataService_) {
    TestDataService = _TestDataService_;
  }));

  it ('should return products when getting', function() {
    expect(TestDataService.getProductData().length).toEqual(3);
  });

  it ('should return an empty array when no employee has been added yet', function() {
    expect(TestDataService.getEmployees().length).toEqual(0);
  });

  it ('should return an array with 1 employee when an employee has been added ', function() {
    let employee = { 'id' : 1234, 'name' : 'Daan', 'age' : 20, 'salary' : 200000 };

    TestDataService.addEmployee(employee);

    expect(TestDataService.getEmployees().length).toEqual(1);
  });

  it ('should remove an employee when an employee is removed', function() {
    let employee1 = { 'id' : 1234, 'name' : 'Daan', 'age' : 20, 'salary' : 200000 };
    let employee2 = { 'id' : 1235, 'name' : 'Jos', 'age' : 45, 'salary' : 1 };

    TestDataService.addEmployee(employee1);
    TestDataService.addEmployee(employee2);

    TestDataService.removeEmployee(employee1);

    expect(TestDataService.getEmployees().length).toEqual(1);
  });

});
