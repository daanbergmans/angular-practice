angular.module("myApp")

  .controller("HomeController", ["$interval", function($interval) {
    var vm = this;

    let names = ["Daan", "Jos", "Jeff", "Jaak"];
    let timer = null;
    let paused = false;

    vm.name = names[0];
    vm.pauseText = "Pause";

    let changeRandomName = function() {
      let index = Math.round(Math.random() * (names.length - 1));
      vm.name = names[index];
    }

    timer = $interval(function() {
      changeRandomName();
    }.bind(this), 500);

    vm.pause = function() {
      if (!paused) {
        $interval.cancel(timer);
        timer = null;
        vm.pauseText = "Resume";
        paused = true;
      } else {
        if (timer === null) {
          timer = $interval(function() {
            changeRandomName();
          }.bind(this), 500);
          vm.pauseText = "Pause";
          paused = false;
        }
      }
    }

  }]);
