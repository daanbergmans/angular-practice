describe('TestCalculatorController', function() {

  let $controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it ('should add to 2 to the calculation string when adding 2', function() {
    let controller = $controller('CalculatorController',   {$scope:{}});
    controller.addToCalculation('2');
    expect(controller.calculationString).toEqual('2');
  })

  it ('should set result as 2 when the calculation string is 1+1', function() {
    let controller = $controller('CalculatorController',   {$scope:{}});
    controller.calculationString = '1+1';
    controller.calculate();
    expect(controller.result).toEqual(2);
  });

  it ('should clear result and calculation string when clearing', function() {
    let controller = $controller('CalculatorController',   {$scope:{}});
    controller.calculationString = '1+1';
    controller.result = '2';
    controller.clear();
    expect(controller.calculationString).toEqual('');
  });

  it ('should clear calculation string when clearing', function() {
    let controller = $controller('CalculatorController',   {$scope:{}});
    controller.calculationString = '1+1';
    controller.clear();
    expect(controller.calculationString).toEqual('');
  });

  it ('should clear result when clearing', function() {
    let controller = $controller('CalculatorController',   {$scope:{}});
    controller.result = '2';
    controller.clear();
    expect(controller.result).toEqual('');
  });

});
