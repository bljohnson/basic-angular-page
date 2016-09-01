// create module (container for all the parts of application)
// inject ngRoute as dependency - provides routing so no page refreshes needed
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/home.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/pages/about.html',
			controller: 'aboutController'
		});
});

// define a controller
app.controller('mainController', function($scope) {
	$scope.message = 'Everyone come see how good I look!';
	$scope.naomi = {
		name: 'Naomi',
  		address: '1600 Amphitheatre'
	};
	$scope.igor = {
		name: 'Igor',
		address: '123 Somewhere'
	};
})
// custom directive
.directive('myCustomer', function() {
	return {
		restrict: 'E',
		scope: {
			customerInfo: '=info'
		},
		templateUrl: 'views/templates/my-customer.html'
	};
});

app.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});
