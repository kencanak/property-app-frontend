'use strict';

angular.module('propertyAppFrontendApp', ['propertyAppFrontendApp.auth',
    'propertyAppFrontendApp.admin', 'propertyAppFrontendApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'btford.socket-io', 'ui.router', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
