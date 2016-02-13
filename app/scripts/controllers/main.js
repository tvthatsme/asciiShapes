'use strict';

/**
 * @ngdoc function
 * @name asciiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asciiApp
 */
angular.module('asciiApp')
  .controller('MainCtrl', function ($scope) {
  
    // Choosing the shape is required.
  
    // Choosing the height of the shape is required for the user.
    $scope.shapeHeight = 10;
  
    // Choosing the label should be optional for the user.
    // Default value = 'HI'
    $scope.shapeLabel = 'HI';
  
    // Choosing the label row should be optional for the user.
    // Default value = 4
    $scope.labelRow = 4;
  });
