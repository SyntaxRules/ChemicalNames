'use strict';

describe('Controller: FlashcardsctrlCtrl', function () {

    // load the controller's module
    beforeEach(module('chemicalNamesApp'));

    var FlashcardsctrlCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        FlashcardsctrlCtrl = $controller('FlashcardsctrlCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
