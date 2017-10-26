// The controller contains all the logic which is executed behind the corresponding view, and where the values are found
// which will be bound to the {{ vm.name }} variable for example

//Get the 'myApp' module you defined on top in your html file
angular.module("myApp")

  // Inject the $interval dependecy to do something every x milliseconds
  .controller("HomeController", ["$interval", function($interval) {
    let vm = this;

    let names = ["Daan", "Jos", "Jeff", "Jaak"];
    let timer = null;
    let paused = false;

    vm.name = names[0];
    vm.pauseText = "Pause";
    vm.pause = pause;

    function changeRandomName() {
      let index = Math.round(Math.random() * (names.length - 1));
      vm.name = names[index];
    }

    function pause() {
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

    timer = $interval(function() {
      changeRandomName();
    }.bind(this), 500);

  }]);

  // Go to factories/employeeFactory.js or explore other controllers and their corresponding views
