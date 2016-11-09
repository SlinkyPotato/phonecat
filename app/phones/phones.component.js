'use strict';

angular.module('phones').
	component('phones', {
		templateUrl: 'app/phones/phones.component.html',
		controller: function PhonesController() {
			this.phones = [
				{
					name: 'Nexus S',
					snippet: 'Fast just got fater with Nexus S',
					age: 1
				},
				{
					name: 'Motorola XOOM with Wi-Fi',
					snippet: 'The Next, Next Generation tablet',
					age: 2
				},
				{
					name: 'MOTOROLA XOOM',
					snippet: 'The Next, Next Generation tablet.',
					age: 3
				}
			];

			this.orderProp = 'age';
		}
});