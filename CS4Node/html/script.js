var app = angular.module('myApp', []);
app.controller('siteCtrl', function($scope, $window, $http) 
{
    $scope.usernameInput;
    $scope.passwordInput;
    console.log("within module");
    $scope.todoInput;
    $scope.loginInfo;
    $scope.todoList = [];

    $scope.createUser = function()
    {

    };

    $scope.login = function()
    {
        console.log("Within the login function");
        var url = "validateUser?u=" + $scope.usernameInput;
        console.log(url);
        $http.get(url).success(function(data)
        {
            console.log("within get");
            console.log(data);
            if(data.length === 0)
            {
                $scope.loginInfo = "Invalid username";
            }
            else
            {
                if($scope.passwordInput === data['password'])
                    $window.location.href = "todolist.html";
                else
                    $scope.loginInfo = "Invalid Password";
            }
        });
        /*$http(
        {
            method: "GET",
            url: url,
            responseType: "jsonp"
        }).then(function sucessCallback(response)
        {
            console.log("Response: " + response);
            $scope.loginInfo = response;
        }, function errorCallback(response)
        {
            console.log("error: " + response);
        });*/
        //$scope.usernameInput= "Test1";
        //$scope.passwordInput = "Test2";
        //$window.location.href = "todolist.html";
    };

    $scope.createUser = function()
    {
        var url = "createUser?u=" + $scope.usernameInput + "&p=" + $scope.passwordInput;
        $http.get(url).success(function(data)
        {
            if(data === "OK")
            {
                $scope.loginInfo = "User created";
            }
            else
                $scope.loginInfo = data;
        });
    }

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
