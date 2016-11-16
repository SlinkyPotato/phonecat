'use strict';

angular.module('phones', ['service.phones'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/phones', {
		templateUrl: 'app/phones/phones.component.html',
		controller: 'PhonesController'
	});
}])

.controller('PhonesController', ['$scope', 'Phone',
function($scope, Phone) {
	$scope.phones = {};
	$scope.phones = Phone.query();
	$scope.orderProp = 'age';
}]);