var app = angular.module('myApp', []);

app.service('Credentials', function($window)
{
    var credService = {};

    credService.getUsername = function()
    {
        //return username;
        var myData = $window.sessionStorage.getItem("user");
        return myData;
    };
    credService.getPassword = function()
    {
        //return password;
        var myData = $window.sessionStorage.getItem("password");
        return myData;
    };
    credService.getTodoList = function()
    {
        var data = $window.sessionStorage.getItem("todoList");
        return JSON.parse(data);
    };
    credService.setUsername = function(name)
    {
        //username = name;
        $window.sessionStorage.setItem("user", name);
    };
    credService.setPassword = function(secret)
    {
        //password = secret;
        $window.sessionStorage.setItem("password", secret);
    };
    credService.setTodoList = function(todoList)
    {
        $window.sessionStorage.setItem("todoList", JSON.stringify(todoList));
    }
    return credService;
});

app.controller('loginCtrl', function($scope, $window, $http, Credentials) 
{
    $scope.usernameInput;
    $scope.passwordInput;
    $scope.loginInfo;
    
    $scope.login = function()
    {
        var url = "validateUser?u=" + $scope.usernameInput;
        $http.get(url).success(function(data)
        {
            if(data.length === 0)
            {
                $scope.loginInfo = "Invalid username";
            }
            else
            {
                if($scope.passwordInput === data['password'])
                {
                    Credentials.setUsername($scope.usernameInput);
                    url = "getTodoList?u=" + $scope.usernameInput;
                    $http.get(url).success(function(data)
                    {
                        Credentials.setTodoList(data);
                    });
                    $window.location.href = "todolist.html";
                }
                else
                    $scope.loginInfo = "Invalid Password";
            }
        });
        url = "getTodoList?u=" + $scope.usernameInput;
        $http.get(url).success(function(data)
        {
            Credentials.setTodoList(data);
        });
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
});

app.controller('todoCtrl', function($scope, $http, Credentials)
{
    $scope.todoInput;
    $scope.todoList = Credentials.getTodoList();
    
    $scope.todoAdd = function() 
    {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";

        var url = "setTodoList?u=" + Credentials.getUsername();
        $http.post(url, $scope.todoList).success(function(data)
        {
            console.log("post=" + data);
        });
    };

    $scope.remove = function() 
    {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) 
        {
            if (!x.done) $scope.todoList.push(x);
        });

        var url = "setTodoList?u=" + Credentials.getUsername();
        $http.post(url, $scope.todoList).success(function(data)
        {
            console.log("post=" + data);
        });
    };
});