var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) 
{
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  $scope.upperMessage = function() 
  {
      //$scope.first = $scope.first.toUpperCase();
      //$scope.last = $scope.last.toLowerCase();
    $scope.message = 'Hello ' + $scope.first.toUpperCase() +' '+ $scope.last.toUpperCase() + '!';
  };
  $scope.lowerMessage = function()
  {
      $scope.message = 'Hello ' + $scope.first.toLowerCase() +' '+ $scope.last.toLowerCase() + '!';
  }
});