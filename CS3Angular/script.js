var app = angular.module('myApp', []); 
app.controller('loginCtrl', function($scope) 
{
    $scope.familyList = [];
    $scope.usernameInput = "";
    $scope.passwordInput = "";
/*
    $scope.familyAdd = function() 
    {
        $scope.familyList.push({familyText:$scope.personInput + ", " + $scope.fatherInput + ", " + $scope.motherInput, done:false});
        $scope.personInput = "";
        $scope.fatherInput = "";
        $scope.motherInput = "";
    };

    $scope.remove = function() 
    {
        var oldList = $scope.familyList;
        $scope.familyList = [];
        angular.forEach(oldList, function(x) 
        {
            if (!x.done) $scope.familyList.push(x);
        });
    };*/
});