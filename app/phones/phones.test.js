'use strict';

describe('phones', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phones'));

  // Test the controller
  describe('PhonesController', function() {

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('phones');

      expect(ctrl.phones.length).toBe(3);
    }));

  }); 

});
