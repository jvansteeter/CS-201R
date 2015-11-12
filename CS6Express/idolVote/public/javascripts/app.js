angular.module('idol', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http)
  {
    $scope.kellyVotes = 0;
    $scope.carrieVotes = 0;
    $scope.jordinVotes = 0;
    $scope.jenniferVotes = 0;

    $scope.showAll = function() 
    {
      console.log("show all");
      $http.get('/singers/kellyClarkson').success(function(data)
      {
        //angular.copy(data, $scope.comments);
        $scope.kellyVotes = data['votes'];
      });
      $http.get('/singers/carrieUnderwood').success(function(data)
      {
        //angular.copy(data, $scope.comments);
        $scope.carrieVotes = data['votes'];
      });
      $http.get('/singers/jordinSparks').success(function(data)
      {
        //angular.copy(data, $scope.comments);
        $scope.jordinVotes = data['votes'];
      });
      $http.get('/singers/jenniferHudson').success(function(data)
      {
        //angular.copy(data, $scope.comments);
        $scope.jenniferVotes = data['votes'];
      });
    };
    $scope.showAll();
    
    $scope.vote = function(name) 
    {
      console.log("vote");
      switch (name) {
        case "Kelly Clarkson":
          return $http.put('/singers/kellyClarkson/vote')
          .success(function(data)
          {
            console.log("vote worked");
            $scope.kellyVotes += 1;
          });
          break;
          
        case "Carrie Underwood":
          return $http.put('/singers/carrieUnderwood/vote')
          .success(function(data)
          {
            console.log("vote worked");
            $scope.carrieVotes += 1;
          });
          break;
          
        case "Jordin Sparks":
          return $http.put('/singers/jordinSparks/vote')
          .success(function(data)
          {
            console.log("vote worked");
            $scope.jordinVotes += 1;
          });
          break;
          
        case "Jennifer Hudson":
          return $http.put('/singers/jenniferHudson/vote')
          .success(function(data)
          {
            console.log("vote worked");
            $scope.jenniferVotes += 1;
          });
          break;
      }
    }
  }
]);