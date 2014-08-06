'use strict';

describe('Service: cationFactory', function () {

  // load the service's module
  beforeEach(module('chemicalNamesApp'));

  // instantiate service
  var cationFactory;
  beforeEach(inject(function (_cationFactory_) {
    cationFactory = _cationFactory_;
  }));

  it('should do something', function () {
    expect(!!cationFactory).toBe(true);
  });

});
