describe('TestContactController', function() {

  let $controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it ('should have developer name set as Daan Bergmans', function() {
    let controller = $controller('ContactController',   {$scope:{}});
    expect(controller.developer).toEqual('Daan Bergmans');
  });

});
