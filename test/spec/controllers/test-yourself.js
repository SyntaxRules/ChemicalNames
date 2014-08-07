'use strict';

describe('Controller: TestYourselfCtrlCtrl', function () {

    // load the controller's module
    beforeEach(module('chemicalNamesApp'));

    var TestYourselfCtrlCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TestYourselfCtrlCtrl = $controller('TestYourselfCtrlCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
