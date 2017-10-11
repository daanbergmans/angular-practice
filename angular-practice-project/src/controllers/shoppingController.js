angular.module("myApp")

  .controller("ShoppingController", ["TestDataService", function(TestDataService) {
    var vm = this;

    /* LOCAL VARIABLE ASSIGNMENTS */

    let usableProducts = TestDataService.getProductData().slice();

    /* ANGULAR VARIABLE ASSIGNMENTS */

    vm.productDoesntExist = false;
    vm.selectedProducts = [];
    vm.subtotal = 0;

    /* FUNCTION ASSIGNMENTS */

    vm.search = search;
    vm.remove = remove;
    vm.changeQty = qtyRemove;

    /* FUNCTIONS */

    function search() {
      let foundProduct = null;

      usableProducts.forEach(function(product) {
        if (product.name === vm.searchTerm) {
          foundProduct = product;
          return;
        }
      });

      if (foundProduct != null) {
        vm.productDoesntExist = false;
        vm.selectedProducts.push(foundProduct);
        foundProduct.quantity = 1;

        let index = usableProducts.indexOf(foundProduct);

        if (index > -1) {
          usableProducts.splice(index, 1);
        }

        getTotalByQuantity();
        vm.productDoesntExist = false;
      } else {
        vm.productDoesntExist = true;
      }

      vm.searchTerm = "";
    }

    function remove(product) {
      let index = vm.selectedProducts.indexOf(product);

      if (index > -1) {
        vm.selectedProducts.splice(index, 1);
        usableProducts.push(product);
        getTotalByQuantity();
      }
    }

    function qtyRemove(product, quantity) {
      if (quantity <= 0) {
        remove(product);
      } else {
        getTotalByQuantity();
      }
    }

    function getTotalByQuantity() {
      var total = 0;

      vm.selectedProducts.forEach(function(product) {
        total += (product.price * product.quantity);
      });

      vm.subtotal = total;
    }

  }]);
