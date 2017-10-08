angular.module("myApp")

  .service("DataService", function() {

    var products = [
      {"name" : "Product 1", "price" : 5.00, "quantity" : 1},
      {"name" : "Product 2", "price" : 5.99, "quantity" : 1},
      {"name" : "Product 3", "price" : 15.49, "quantity" : 1}
    ];

    this.getProductData = function() {
      return products;
    }

  });
