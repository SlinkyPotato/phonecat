'use strict';

angular.module('phonesDetail', ['service.phones'])

.component('phonesDetail', {
	templateUrl: 'app/phones/detail/phones-detail.component.html',
	controller: ['$routeParams', 'Phone', 
		function PhonesDetailController($routeParams, Phone) {
			var self = this;

			self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
				self.setImage(phone.images[0]);
			})

			self.setImage = function setImage(imageUrl) {
				self.mainImageUrl = imageUrl;
			}
		}
	]
});