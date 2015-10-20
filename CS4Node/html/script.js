var app = angular.module('myApp', []); 
app.controller('siteCtrl', function($scope, $window, $http) 
{
    $scope.usernameInput;
    $scope.passwordInput;
    $scope.loginError;
    console.log("within module");
    $scope.todoInput;
    $scope.todoList = [];

    $scope.createUser = function()
    {

    };

    $scope.login = function()
    {
        /*var url = "http://hearts:4000/validateUser?u=" + $scope.usernameInput;
        $http(
        {
            method: "GET",
            url: url
        }).then(function sucessCallback(response)
        {
            console.log("Response: " + response);
        }, function errorCallback(response)
        {
            console.log(response);
        });*/
        console.log("Within the login function");
        $scope.usernameInput= "Test1";
        $scope.passwordInput = "Test2";
        $window.location.href = "todolist.html";
    };

    $scope.todoAdd = function() 
    {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() 
    {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
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
