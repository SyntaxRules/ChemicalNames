'use strict';

describe('Service: compoundFactory', function () {

  // load the service's module
  beforeEach(module('chemicalNamesApp'));

  // instantiate service
  var compoundFactory;
  beforeEach(inject(function (_compoundFactory_) {
    compoundFactory = _compoundFactory_;
  }));

  it('should do something', function () {
    expect(!!compoundFactory).toBe(true);
  });

});
