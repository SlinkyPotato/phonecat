'use strict';

angular.module('phonesDetail', ['ngRoute'])

.component('phonesDetail', {
	templateUrl: 'app/phones/detail/phones-detail.component.html',
	controller: ['$routeParams', 
		function PhoneDetailController($routeParams) {
			this.phoneId = $routeParams.phoneId;
		}
	]
});