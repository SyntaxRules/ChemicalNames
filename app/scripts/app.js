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
            .when('/test-yourself', {
                templateUrl: 'views/test-yourself.html',
                controller: 'TestYourselfCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
