'use strict';

describe('Controller: HeaderCtrlCtrl', function () {

    // load the controller's module
    beforeEach(module('chemicalNamesApp'));

    var HeaderCtrlCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrlCtrl = $controller('HeaderCtrlCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
