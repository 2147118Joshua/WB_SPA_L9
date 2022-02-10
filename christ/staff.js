// Create AngularJS application
var app = angular.module('demoLearningTurn',[]);

// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.fullName ;
    $scope.today = new Date();

    $http.get('https://2147118joshua.github.io/Staff_DetailsJSON/employee.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
        
	
});





