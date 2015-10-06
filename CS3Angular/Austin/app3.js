var myApp = angular.module('myApp', ['validation.match']);

myApp.controller('ProfileController', function($scope, $location) {
  $scope.userProfile = [];

  $scope.onSubmit = function() {

      $scope.fullAddress =  $scope.StreetAddress + ' ' + $scope.City + ' ' + $scope.State + ' ' + $scope.Zip;
      $scope.userProfile.push({ username:$scope.Username, password:$scope.Password, email:$scope.Email, address:$scope.fullAddress, avatar:$scope.Avatar});
      console.log($scope.userProfile);
      $scope.toHide = true;
    };

});
