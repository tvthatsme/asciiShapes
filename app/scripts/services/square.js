/* jshint strict: false, -W117 */

'use strict';

asciiApp.factory('SquareService', function () {
  var Square = {};
  
  // Set the name of the square
  Square.name = 'Square';
  
  Square.draw = function (height, label, labelRow) {
    var asciiString = '',
      printChar = 'X';
      
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
  };
  
  return Square;
});