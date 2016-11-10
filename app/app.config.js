angular.module('angularApp')
	.config(['$locationProvider', '$routeProvider',

	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/phones', {
				template: '<phones></phones>'
			}).
			when('/phones/:phoneId', {
				template: '<phones-detail></phones-detail>'
			}).
			otherwise('/phones');
	}
]);