angular.module("myApp")

  .controller("CalculatorController", function() {
    let vm = this;

    vm.calculationString = "";
    vm.stringNotValid = false;

    vm.addToCalculation = addToCalculation;
    vm.calculate = calculate;
    vm.clear = clear;

    function addToCalculation(string) {
      vm.calculationString += string;
    }

    function calculate() {
        vm.result = eval(vm.calculationString);
        vm.stringNotValid = false;
    }

    function clear() {
      vm.result = "";
      vm.calculationString = "";
    }

  });
