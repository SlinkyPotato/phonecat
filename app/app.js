'use strict';

// Declare app level module which depends on views, and components
var angularApp = angular.module('angularApp', [
	'ngRoute',
  'angularApp.view1',
  'angularApp.view2',
  'angularApp.version',
  'phones'
]);

angularApp.config(['$locationProvider', '$routeProvider', 
	function($locationProvider, $routeProvider) {
	// $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view1'});
}]);