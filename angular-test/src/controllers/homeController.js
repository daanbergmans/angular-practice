angular.module("myApp")

  .controller("HomeController", ["$interval", function($interval) {
    var vm = this;

    var names = ["Daan", "Jos", "Jeff", "Jaak"];

    vm.name = names[0];

    var changeRandomName = function() {
      var index = Math.round(Math.random() * (names.length - 1));
      vm.name = names[index];
    }

    var search = function() {
      vm.result = "You searched for: " + vm.searchTerm;
    }

    $interval(changeRandomName, 500);
  }]);
