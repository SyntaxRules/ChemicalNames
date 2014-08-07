'use strict';

angular.module('chemicalNamesApp')
  .controller('MainCtrl', function ($scope, anionFactory, cationFactory, compoundFactory) {
        var init = function() {
            $scope.compound = $scope.getRandomCompound();
            console.log($scope.compound);
        };

        $scope.getRandomCompound = function() {
            return compoundFactory.getChemicalCompound(cationFactory.randomCation(), anionFactory.randomAnion());
        };

        init();
  });
