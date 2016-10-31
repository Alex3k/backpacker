'use strict';

angular.module('backpacker', [
  'ngRoute',
  'backpacker.homepage'
]).
config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/pages/homepage.html",
        controller: "HomePageController",
        controllerAs: "vm"
    })
    .otherwise({
    	redirectTo: "/"
    })
});