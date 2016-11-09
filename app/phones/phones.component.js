'use strict';

angular.module('phones').
	component('phones', {
		templateUrl: 'app/phones/phones.component.html',
		controller: function PhonesController() {
			this.phones = [
				{
					name: 'Nexus S',
					snippet: 'Fast just got fater with Nexus S'	
				},
				{
					name: 'Motorola XOOM with Wifi',
					snippet: 'The Next, Next Generation tablet'
				},
				{
					name: 'MOTOROLA XOOM',
					snippet: 'The Next, Next Generation tablet.'
				}
			];
		}
});