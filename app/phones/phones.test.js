'use strict';

describe('phones', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phones'));

  // Test the controller
  describe('PhonesController', function() {
  	let ctrl, $httpBackend;

  	/*
		* The injector ignores leading and trailing underscores here (_$httpBackend_)
		* This allows us to inject a service and assign it to a variable with the same name
		* as the service while avoiding a name conflict.
  	*/
  	beforeEach(inject(function($componentController, _$httpBackend_) {
  		$httpBackend = _$httpBackend_;
  		$httpBackend.expectGET('/app/phones/mock-phones/phones.json')
  								.respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  		ctrl = $componentController('phones');
  	}))

    it('should create a `phones` property with 2 phones fetched with `$http`', function() {
    	expect(ctrl.phones).toBeUndefined();

    	$httpBackend.flush();
      expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` model', function() {
    	expect(ctrl.orderProp).toBe('age');
    })

  }); 
});
