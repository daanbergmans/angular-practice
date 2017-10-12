angular.module("myApp")

  .service("StatisticsService", ["$http", function($http) {

    //To check
    this.createPageView = function(page) {
      $http({
        method : "POST",
        url : "http://localhost:9000/pageviews",
        data : page
      }).then(function mySuccess(response) {
        return response.data;
      }, function myError(response) {
        return -1;
      });
    }

    //To make
    this.getPageViews = function(page) {
      $http({
        method : "GET",
        url : "http://localhost:9000/pageviews"
      }).then(function mySuccess(response) {
        return response.data;
      }, function myError(response) {
        return -1;
      });
    }

    //To make
    this.addPageView = function(page) {
      $http({
        method : "PUT",
        url : "http://localhost:9000/pageviews"
      }).then(function mySuccess(response) {
        return response.data;
      }, function myError(response) {
        return -1;
      });
    }

  }]);