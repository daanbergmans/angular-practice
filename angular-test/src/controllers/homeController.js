angular.module("myApp")

  .controller("HomeController", ["$interval", function($interval) {
    var vm = this;

    var names = ["Daan", "Jos", "Jeff", "Jaak"];
    var timer = null;
    var paused = false;

    vm.name = names[0];
    vm.pauseText = "Pause";

    var changeRandomName = function() {
      var index = Math.round(Math.random() * (names.length - 1));
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
        console.log("1");
      } else {
        if (timer === null) {
          timer = $interval(function() {
            changeRandomName();
          }.bind(this), 500);
          vm.pauseText = "Pause";
          paused = false;
          console.log("2");
        }
      }
    }

  }]);
