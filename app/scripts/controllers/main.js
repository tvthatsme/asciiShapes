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
    
  
    // Define the gatekeeper to the shape's height
    $scope.setHeight = function(height) {
      // Check bounds first
      if (height < 1) {
        // TODO: Warn the user.
        height = 1;
      } else if (height > 100) {
        height = 100;
      }
      
      // The label row needs to be adjusted if it is currently greater than 
      // the new shape height.
      if ($scope.labelRow > height) {
        // TODO: Should probably notify the user as well.
        $scope.labelRow = height;
      }
      
      // Set the height (with any corrections)
      $scope.shapeHeight = height;
      
      // Redraw the shape
      reDraw();
    };
  
    // Define the gatekeeper to the shape's label
    $scope.setLabel = function(label) {
      // Make the label all uppercase
      label = label.toUpperCase();
      
      // Trim the label of leading or trailing spaces
      label = label.trim();
      
      $scope.shapeLabel = label;
      
      // Redraw the shape
      reDraw();
    };
  
    // Define the gatekeeper to the shape's label row
    $scope.setLabelRow = function(labelRow) {
      // The label row cannot excede the height of the shape
      if (labelRow > $scope.shapeHeight) {
        // TODO: Warn the user.
        labelRow = $scope.shapeHeight;
      }
      
      if (labelRow < 1) {
        // TODO: Warn the user.
        labelRow = 1;
      }
      
      // Set the label row (with any corrections)
      $scope.labelRow = labelRow;
      
      // Redraw the shape
      reDraw();
    };
    
    $scope.selectShape = function() {
      reDraw();
    };
  });