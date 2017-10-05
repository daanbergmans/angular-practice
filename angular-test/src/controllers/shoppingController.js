angular.module("myApp")

  .controller("ShoppingController", function() {
    var vm = this;

    var sourceProducts = [
      {"name" : "product 1", "price" : 1, "quantity" : 1},
      {"name" : "product 2", "price" : 2, "quantity" : 1},
      {"name" : "product 3", "price" : 3, "quantity" : 1}
    ];

    var usableProducts = sourceProducts.slice();

    vm.productDoesntExist = false;
    vm.selectedProducts = [];

    vm.search = function() {
      var foundProduct = null;

      usableProducts.forEach(function(product) {
        if (product.name === vm.searchTerm) {
          foundProduct = product;
          return;
        }
      });

      if (foundProduct != null) {
        vm.productDoesntExist = false;
        vm.selectedProducts.push(foundProduct);

        var index = usableProducts.indexOf(foundProduct);

        if (index > -1) {
          usableProducts.splice(index, 1);
        }

        vm.productDoesntExist = false;
      } else {
        vm.productDoesntExist = true;
      }

      vm.searchTerm = "";
    }

    vm.remove = function(product) {
      var index = vm.selectedProducts.indexOf(product);

      if (index > -1) {
        vm.selectedProducts.splice(index, 1);
        usableProducts.push(product);
      }
    }

  });
