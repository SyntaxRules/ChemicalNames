'use strict';

angular
    .module('chemicalNamesApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/flashcards', {
                templateUrl: 'views/flashcards.html',
                controller: 'FlashcardsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
