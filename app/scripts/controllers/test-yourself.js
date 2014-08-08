'use strict';

angular.module('chemicalNamesApp')
    .controller('TestYourselfCtrl', function ($scope, anionFactory, cationFactory, compoundFactory) {
        var init = function () {
            $scope.getRandomCompound();
            console.log($scope.compound);
            $scope.userInput = '';
            $scope.answerSubmitted = false;
            $scope.isCorrectAnswer = false;
        };

        $scope.testAnswer = function () {
            $scope.answerSubmitted = true;
            $scope.isCorrectAnswer = $scope.compound.formula == $scope.userInput;
        };

        $scope.getRandomCompound = function () {
            $scope.answerSubmitted = false;
            $scope.userInput = '';
            $scope.compound = compoundFactory.getChemicalCompound(cationFactory.randomCation(), anionFactory.randomAnion());
        };

        $scope.addSubscript = function (number) {
            $scope.userInput += compoundFactory.getSubscriptFor(number);
        };

        init();
    });
