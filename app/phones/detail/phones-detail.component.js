'use strict';

angular.module('phonesDetail', ['ngRoute'])

.component('phonesDetail', {
	templateUrl: 'app/phones/detail/phones-detail.component.html',
	controller: ['$http', '$routeParams', 
		function PhonesDetailController($http, $routeParams) {
			var self = this;
			
			$http.get('assets/mock-data/' + $routeParams.phoneId + '.json').then(function(response) {
				self.phone = response.data;
			});
		}
	]
});