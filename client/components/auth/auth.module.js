'use strict';

angular.module('propertyAppFrontendApp.auth', ['propertyAppFrontendApp.constants',
    'propertyAppFrontendApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
