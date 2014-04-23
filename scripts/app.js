'use strict';

var app = angular.module('lvipApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/slider_view.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about_view.html'
        // controller: 'AboutCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services_view.html'
      })
      .when('/prices', {
        templateUrl: 'views/pricing_view.html'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar_view.html'
      })
      .when('/tickets', {
        templateUrl: 'views/tickets_info.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact_view.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
