/*exported asciiApp, Shape */

'use strict';

/**
 * @ngdoc function
 * @name asciiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asciiApp
 */
var asciiApp = 
angular.module('asciiApp')
  .controller('MainCtrl', function ($scope, SquareService, TriangleService, DiamondService, RectangleService) {
    var defaultHeight = 10,
      defaultLable = 'HI',
      defaultLabelRow = 4;
    
    function reDraw() {
      $scope.shape = $scope.shapeSelected.draw($scope.shapeHeight, $scope.shapeLabel, $scope.labelRow);
    }
  
    // Define the supported shapes
    $scope.shapes = [SquareService, TriangleService, DiamondService, RectangleService];
    
    $scope.shapeSelected = SquareService;
    
    // This is the shape that is currently selected - default to square.
    $scope.shape = SquareService.draw(defaultHeight, defaultLable, defaultLabelRow);
  
    // Choosing the shape is required.
  
    // Choosing the height of the shape is required for the user.
    $scope.shapeHeight = defaultHeight;
  
    // Choosing the label should be optional for the user.
    // Default value = 'HI'
    $scope.shapeLabel = defaultLable;
  
    // Choosing the label row should be optional for the user.
    // Default value = 4
    $scope.labelRow = defaultLabelRow;
    
  
    $scope.setHeight = function() {
      if ($scope.labelRow > $scope.shapeHeight) {
        // The label row needs to be adjusted if it is currently greater than 
        // the new shape height.
        // TODO: Should probably notify the user as well.
        $scope.labelRow = $scope.shapeHeight;
      } else if ($scope.shapeHeight < 1) {
        // TODO: Warn the user.
        $scope.shapeHeight = 1;
      }
      reDraw();
    };
  
    $scope.setLabel = function() {
      reDraw();
    };
  
    $scope.setLabelRow = function() {
      // The label row cannot excede the height of the shape
      if ($scope.labelRow > $scope.shapeHeight) {
        // TODO: Warn the user.
        $scope.labelRow = $scope.shapeHeight;
      } else if ($scope.labelRow < 1) {
        // TODO: Warn the user.
        $scope.labelRow = 1;
      }
      reDraw();
    };
    
    $scope.selectShape = function() {
      reDraw();
    };
  });