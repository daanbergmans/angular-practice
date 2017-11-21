angular.module("myApp")

  .service("TestDataService", function() {

    const products = [
      { "name" : "Product 1", "price" : 5.00, "quantity" : 1 },
      { "name" : "Product 2", "price" : 5.99, "quantity" : 1 },
      { "name" : "Product 3", "price" : 15.49, "quantity" : 1 }
    ];

    const employees = [];

    this.getProductData = function() {
      return products;
    }

    this.getEmployees = function() {
      return employees;
    }

    this.addEmployee = function(employee) {
      employees.push(employee);
    }

    this.removeEmployee = function(employee) {
      if (employees.length >= 1) {
        var index = employees.indexOf(employee);

        if (index > -1) {
          employees.splice(index, 1);
        }
      }
    }

  });
