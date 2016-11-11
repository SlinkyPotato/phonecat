'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('PhoneCat Application', function() {

  it('should redirect `index.html` to `index.html#!/phones', function() {
      browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toBe('/phones');
    });

  describe('View: Phones', function() {

    beforeEach(function() {
      browser.get('index.html#!/phones');
    });

    it('should be possible to control phone order via the drop-down menu', function() {
      let queryField = element(by.model('$ctrl.query'));
      let orderSelect = element(by.model('$ctrl.orderProp'));
      let nameOption = orderSelect.element(by.css('option[value="name"]'));
      let phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

      function getNames() {
        return phoneNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet'); // Let's narrow the datasset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

/*    it('should render phone specific links', function() {
      let query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.phones li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/#!/phones/nexus-s');
    });*/

  });

  describe('View: Phones Detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/phones/nexus-s');
    });

    it('should display placeholder page with `phoneId`', function() {
      expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
    })
  })

});
