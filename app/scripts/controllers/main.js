/*exported asciiApp, Shape */

'use strict';

var asciiApp =
  angular.module('asciiApp')
  .controller('MainCtrl', function ($scope, SquareService, TriangleService, DiamondService, RectangleService) {

    // Define the app defaults
    var defaultHeight = 10,
      defaultLable = 'HI',
      defaultLabelRow = 4;

    // Define the supported shapes
    $scope.shapes = [SquareService, TriangleService, DiamondService, RectangleService];

    // Scope for the selected shape to draw
    $scope.shapeSelected = SquareService;

    // This is the shape that is currently selected - default to square.
    $scope.shape = SquareService.draw(defaultHeight, defaultLable, defaultLabelRow);

    // Choosing the height of the shape is required for the user.
    $scope.shapeHeight = defaultHeight;
    
    // Message (if any) about changing the shape height
    $scope.shapeHeightMsg = '';

    // Choosing the label should be optional for the user.
    // Default value = 'HI'
    $scope.shapeLabel = defaultLable;

    // Choosing the label row should be optional for the user.
    // Default value = 4
    $scope.labelRow = defaultLabelRow;

    // Message (if any) about changing the label row
    $scope.labelRowMsg = '';


    // Define the gatekeeper to the shape's height
    $scope.setHeight = function (height) {
      // Check bounds first
      if (height < 1) {
        // Warn the user and adjust height.
        $scope.shapeHeightMsg = 'Height must be greater than 0.';
        height = 1;
      } else if (height > 100) {
        // Warn the user and adjust height.
        $scope.shapeHeightMsg = 'Height must be equal or less than 100.';
        height = 100;
      } else {
        // Clear the error message if no problems.
        $scope.shapeHeightMsg = '';
      }

      // The label row needs to be adjusted if it is currently greater than 
      // the new shape height.
      if ($scope.labelRow > height) {
        // Notify the user that the label row is changing.
        $scope.labelRow = height;
        $scope.labelRowMsg = 'Adjusting label row to fit in shape.';
      } else {
        $scope.labelRowMsg = '';
      }

      // Set the height (with any corrections)
      $scope.shapeHeight = height;

      // Redraw the shape
      reDraw();
    };

    // Define the gatekeeper to the shape's label
    $scope.setLabel = function (label) {
      // Make the label all uppercase
      label = label.toUpperCase();

      // Trim the label of leading or trailing spaces
      label = label.trim();

      // Set the new label and redraw the shape
      $scope.shapeLabel = label;
      reDraw();
    };

    // Define the gatekeeper to the shape's label row
    $scope.setLabelRow = function (labelRow) {
      // The label row cannot excede the height of the shape
      if (labelRow > $scope.shapeHeight) {
        // Warn the user and adjust the label row.
        $scope.labelRowMsg = 'Label Row cannot excede the shape height.';
        labelRow = $scope.shapeHeight;
      } else {
        $scope.labelRowMsg = '';
      }

      if (labelRow < 1) {
        // Warn the user and adjust the label row.
        labelRow = 1;
        $scope.labelRowMsg = 'Label Row cannot be less than 1.';
      }

      // Set the label row (with any corrections)
      $scope.labelRow = labelRow;

      // Redraw the shape
      reDraw();
    };

    // Define the gatekeeper to the shape selection.
    $scope.selectShape = function () {
      reDraw();
    };

    // Provide a private function to re-draw the shape
    function reDraw() {
      $scope.shape = $scope.shapeSelected.draw(
        $scope.shapeHeight,
        $scope.shapeLabel,
        $scope.labelRow);
    }
  });