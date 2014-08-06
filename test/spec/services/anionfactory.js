'use strict';

describe('Service: anionFactory', function () {

  // load the service's module
  beforeEach(module('chemicalNamesApp'));

  // instantiate service
  var anionFactory;
  beforeEach(inject(function (_anionFactory_) {
    anionFactory = _anionFactory_;
  }));

  it('should do something', function () {
    expect(!!anionFactory).toBe(true);
  });

});
