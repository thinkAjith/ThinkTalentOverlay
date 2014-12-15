'use strict';

/**
 * @ngdoc overview
 * @name thinkTalentOverlayApp
 * @description
 * # thinkTalentOverlayApp
 *
 * Main module of the application.
 */
angular
  .module('thinkTalentOverlayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ttoverlay.html',
        controller: 'TTOverlayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
