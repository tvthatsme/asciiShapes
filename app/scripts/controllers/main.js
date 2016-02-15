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
  
    // Define the supported shapes
    $scope.shapes = [SquareService, TriangleService, DiamondService, RectangleService];
    
    // This is the shape that is currently selected - default to square.
    $scope.shape = SquareService.draw();
  
    $scope.selectShape = function() {
      console.log('a ' + $scope.shape.name + ' was selected');
    };
  });

var Shape = (function () {
  var
    // Set the default height of the shape to 10
    height = 10,
    shapeName = name,
    label = 'HI',
    labelRow = 4;
  
  return {
    name: shapeName,
    height: height,
    label: label,
    labelRow: labelRow,
    
    setHeight: function (newHeight) {
      // Check bounds
      if (labelRow > newHeight) {
        // The label row needs to be adjusted if it is currently greater than 
        // the new shape height.
        // TODO: Should probably notify the user as well.
        labelRow = newHeight;
      } else if (newHeight < 1) {
        // TODO: Warn the user.
        newHeight = 1;
      }
      
      // Set the new height
      height = newHeight;
    },
    
    setLabel: function (newLabel) {
      console.log('new label ' + newLabel);
      label = newLabel;
    },
    
    setLableRow: function (newLabelRow) {
      // The label row cannot excede the height of the shape
      if (newLabelRow > height) {
        // TODO: Warn the user.
        labelRow = height;
      } else if (newLabelRow < 1) {
        // TODO: Warn the user.
        labelRow = 1;
      }
    }
  };
}());
