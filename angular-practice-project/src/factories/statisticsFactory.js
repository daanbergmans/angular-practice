angular.module("myApp")

  .factory("StatisticsFactory", ["$http", function($http) {

    const baseURL = "http://localhost:9000/statistics";

    let factory = {};

    factory.getPageViews = function() {
      return $http({
        method: 'GET',
        url: baseURL,
      });
    };

    factory.createPageView = function(page) {
      return $http({
        method: 'POST',
        url: baseURL,
        data: page
      });
    };

    factory.removeEmployee = function(page) {
      return $http({
        method: 'PUT',
        url: baseURL,
        data: page
      })
    };

    return factory;

  }]);
