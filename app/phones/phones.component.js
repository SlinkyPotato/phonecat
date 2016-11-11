'use strict';

angular.module('phones', ['ngRoute'])

.component('phones', {
	templateUrl: 'app/phones/phones.component.html',
	controller: ['$http',
		function PhonesController($http) {
			let self  = this;
			self.orderProp = 'age';

			$http.get('/assets/mock-data/phones.json').then(function(response) {
				self.phones = response.data;
			});
		}
	]
});