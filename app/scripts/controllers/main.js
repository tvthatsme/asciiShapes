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
    var defaultHeight = 10,
      defaultLable = 'HI',
      defaultLabelRow = 4;
  
    $scope.shape = '';
  
    // Choosing the shape is required.
  
    // Choosing the height of the shape is required for the user.
    $scope.shapeHeight = defaultHeight;
  
    // Choosing the label should be optional for the user.
    // Default value = 'HI'
    $scope.shapeLabel = defaultLable;
  
    // Choosing the label row should be optional for the user.
    // Default value = 4
    $scope.labelRow = defaultLabelRow;
  
    $scope.newHeight = function() {
      if ($scope.labelRow > $scope.shapeHeight) {
        // The label row needs to be adjusted if it is currently greater than 
        // the new shape height.
        // TODO: Should probably notify the user as well.
        $scope.labelRow = $scope.shapeHeight;
      } else if ($scope.shapeHeight < 1) {
        // TODO: Warn the user.
        $scope.shapeHeight = 1;
      }
      
      // Re-draw the shape.
      $scope.shape = draw($scope.shapeHeight, $scope.shapeLabel, $scope.labelRow);
    };
  
    $scope.newLabel = function() {
      console.log('new label ' + $scope.shapeLabel);
      
      // Re-draw the shape.
      $scope.shape = draw($scope.shapeHeight, $scope.shapeLabel, $scope.labelRow);
    };
  
    $scope.newLabelRow = function() {
      // The label row cannot excede the height of the shape
      if ($scope.labelRow > $scope.shapeHeight) {
        // TODO: Warn the user.
        $scope.labelRow = $scope.shapeHeight;
      } else if ($scope.labelRow < 1) {
        // TODO: Warn the user.
        $scope.labelRow = 1;
      }
      
      // Re-draw the shape.
      $scope.shape = draw($scope.shapeHeight, $scope.shapeLabel, $scope.labelRow);
    };
  
    function draw(height, label, labelRow) {
      var asciiString = '',
        printChar = 'X';
      
      console.log('Drawing new shape:');
      console.log('Height: ' + height);
      console.log('Label: ' + label);
      console.log('LabelRow: ' + labelRow);
      
      // Draw a number of rows
      for (var i = 1; i <= height; i++) {
        // Draw the content of the rows
        
        // First check if this is a label row
        if (i === labelRow) {
          // We are drawing the label row
          var l;
          
          // First print all the letters of the label
          for (l = 0; l < label.length; l++) {
            asciiString += (label.substr(l, 1) + ' ');
          }
          
          // If there is space left over, finish the row with regular chars
          while (l < height) {
            if (l !== (height - 1)) {
              asciiString += (printChar + ' ');
            } else {
              // Special case for the end of a line
              asciiString += (printChar + '\n');
            }
            l++;
          }
        } else {
          // We are drawing a normal row.
          for (var j = 1; j <= height; j++) {
            if (j !== height) {
              asciiString += (printChar + ' ');
            } else {
              // Special case for the end of a line
              asciiString += (printChar + '\n');
            }
          }
        }
      }
      
      // Return the ascii shape
      return asciiString;
    }
  });
