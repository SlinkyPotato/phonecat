'use strict';

angular.module('phones').
	component('phones', {
		templateUrl: 'app/phones/phones.component.html',
		controller: ['$http',
			function PhonesController($http) {
				let self  = this;
				self.orderProp = 'age';

				$http.get('/app/phones/mock-phones/phones.json').then(function(response) {
					self.phones = response.data;
				});
			}
		]
});