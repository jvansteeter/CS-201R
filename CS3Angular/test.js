var app = angular.module('testApp', []);

app.controller('MainCtrl', function($scope, $http) 
{
	$scope.employees = 
	[
	{"firstName":"John", "lastName":"Doe",
	  "city": "Bangalore","State":"karnataka",},

	{"firstName":"Anna", "lastName":"Smith",
	   "city": "Hyderabad","State":"AndraPradesh",},

	{"firstName":"Peter", "lastName": "Jones",
	  "city": "Mumbai","State":"Maharastra",},
	];

	$scope.savedJSON = '';

	$scope.save = function () {
	    $http({
	    	method: "GET",
	    	url: "test.txt"
	    }).then(function successCallback(response)
	    {
	    	console.log(response);
	    }, function errorCallback(response)
	    {
	    	console.log(response);
	    });
	};
/*
	var blob = new Blob([$scope.save],
	{
	type: "application/json;charset=utf-8;"
	});
	downloadLink.attr('href', window.URL.createObjectURL(blob));*/
});





/*app.controller('MainCtrl', ['$scope', '$filter', function ($scope, $filter) 
{
	$scope.employees = 
	[
	{"firstName":"John", "lastName":"Doe",
	  "city": "Bangalore","State":"karnataka",},

	{"firstName":"Anna", "lastName":"Smith",
	   "city": "Hyderabad","State":"AndraPradesh",},

	{"firstName":"Peter", "lastName": "Jones",
	  "city": "Mumbai","State":"Maharastra",},
	];

	$scope.savedJSON = '';

	$scope.save = function () {
	    $scope.savedJSON = angular.toJson($filter('filter')($scope.employees, $scope.searchText));
	    console.log("Got this far correctly");
	    console.log($scope.savedJSON[1][1]);
	};
/*
	var blob = new Blob([$scope.save],
	{
	type: "application/json;charset=utf-8;"
	});
	downloadLink.attr('href', window.URL.createObjectURL(blob));*
}]);*/