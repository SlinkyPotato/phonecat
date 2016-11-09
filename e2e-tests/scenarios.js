'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('PhoneCat Application', function() {

  describe('phones', function() {

    beforeEach(function() {
      browser.get('/index.html');
    });
    
    it('should filter the phone list as a user types into the search box', function() {
      var phones = element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));
      
      expect(phones.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phones.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phones.count()).toBe(2);
    });

  });

});
