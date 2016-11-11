'use strict';

angular.module('service.phones', ['ngResource'])

.factory('Phone', ['$resource',
	function($resource) {
		return $resource('assets/mock-data/:phoneId.json', {
			phoneId: 'phones'
		}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}
]);