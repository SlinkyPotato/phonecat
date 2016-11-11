'use strict';

angular.module('phones', ['service.phones'])

.component('phones', {
	templateUrl: 'app/phones/phones.component.html',
	controller: ['Phone',
		function PhonesController(Phone) {
			this.phones = Phone.query();
			this.orderProp = 'age';
		}
	]
});