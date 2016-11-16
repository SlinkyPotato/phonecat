'use strict';

// Declare app level module which depends on views, and components
angular.module('angularApp', [
	// Core
	'ngRoute',
	'ngAnimate',

	// Shared
	'shared',

	// Components
  'phones',
  'phonesDetail'
])

.config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/phones/:phoneId', {
				template: '<phones-detail></phones-detail>'
			}).
			otherwise('/phones');
	}
]);