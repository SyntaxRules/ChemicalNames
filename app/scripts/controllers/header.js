'use strict';

angular.module('chemicalNamesApp')
    .controller('HeaderCtrl', function ($scope, $location) {
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
