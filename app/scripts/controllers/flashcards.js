'use strict';

angular.module('chemicalNamesApp')
    .controller('FlashcardsCtrl', function ($scope, anionFactory, cationFactory, compoundFactory) {
        var init = function () {
            $scope.getRandomCompound();
            console.log($scope.compound);
        };

        $scope.getRandomCompound = function () {
            $scope.compound = compoundFactory.getChemicalCompound(cationFactory.randomCation(), anionFactory.randomAnion());
        };

        init();
    });
