function TodoCtrl($scope, $http) {
  $http.get('index').success(function(data) {
  $scope.todos = data;
});


  $scope.addTodo = function() {
    $scope.todos.push({division:$scope.todoDivision, sales:$scope.todoSales});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    return $scope.todos.size;
  };


}
