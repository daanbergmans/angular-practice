angular.module("myApp")

  .controller("CalculatorController", function() {
    var vm = this;

    vm.calculationString = "";
    vm.stringNotValid = false;

    vm.addToCalculation = addToCalculation;
    vm.calculate = calculate;
    vm.clear = clear;

    function addToCalculation(string) {
      vm.calculationString += string;
    }

    function calculate() {
      // if (checkIfValid(vm.calculationString)) {
        vm.result = eval(vm.calculationString);
        vm.stringNotValid = false;
      // } else {
      //   vm.stringNotValid = true;
      // }

    }

    function clear() {
      vm.result = "";
      vm.calculationString = "";
    }

    // function checkIfValid(string) {
    //   console.log(string.substr(string.length, -1));
    //   return !isNaN(parseInt(string.substr(string.length, -1), 10)) ? true : false;
    // }

  });
