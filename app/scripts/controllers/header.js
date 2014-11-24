'use strict';

angular.module('chemicalNamesApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.root = "#"; //for local development
    //$scope.root = "ChemicalNames/#"; //for gh-pages deployment
    $scope.links = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Flashcards',
        link: '/flashcards'
      },
      {
        name: 'Quiz',
        link: '/quiz-yourself'
      },
      {
        name: 'About',
        link: '/about'
      }
    ];

    $scope.$on('$locationChangeSuccess', function () {
      var thisLink = $location.path();
      angular.forEach($scope.links, function (link) {
        link.active = link.link == thisLink;
      });
    });

  });
