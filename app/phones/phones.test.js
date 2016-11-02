'use strict';

describe('phones', function() {
	beforeEach(module('angularApp')); // load phones module before each test

	describe('PhonesController', function() {
		console.log(this);
			it('should create a `phones` model with 3 phones', inject(function($componentController) {
				/*var ctrl = $componentController('phones');
				expect(ctrl.phones.length).toBe(3);*/
			}));
	});

});
