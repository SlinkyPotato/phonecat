describe('phonesDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('phonesDetail'));

  // Test the controller
  describe('PhonesDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/mock-data/xyz.json').respond({name: 'phone xyz'});

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('phonesDetail');
    }));

    it('should fetch the phone details', function() {
      expect(ctrl.phone).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.phone).toEqual({name: 'phone xyz'});
    });

  });

});