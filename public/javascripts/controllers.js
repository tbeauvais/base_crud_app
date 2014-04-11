var salesApp = angular.module('salesApp', []);

salesApp.controller('SalesCtrl', function ($scope, $http) {
  $http.get('index').success( function(data) {
    $scope.sales = data;
  });


  $scope.addSalesData = function () {
    $scope.sales.push({division: $scope.newSale.division, sales: $scope.newSale.sales});
    $scope.newSale = {};
  };

});
