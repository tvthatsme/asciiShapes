'use strict';

asciiApp.factory('SquareService', function () {
  var Square = Object.create(Shape);
  
  // Set the name of the square
  Square.name = 'Square';
  
  Square.draw = function () {
    console.log('This is going to draw a ' + Square.name + ' with height ' + Square.height);
    var asciiString = '',
      printChar = 'X';
      
      // Draw a number of rows
      for (var i = 1; i <= Square.height; i++) {
        // Draw the content of the rows
        
        // First check if this is a label row
        if (i === Square.labelRow) {
          // We are drawing the label row
          var l;
          
          // First print all the letters of the label
          for (l = 0; l < Square.label.length; l++) {
            asciiString += (Square.label.substr(l, 1) + ' ');
          }
          
          // If there is space left over, finish the row with regular chars
          while (l < Square.height) {
            if (l !== (Square.height - 1)) {
              asciiString += (printChar + ' ');
            } else {
              // Special case for the end of a line
              asciiString += (printChar + '\n');
            }
            l++;
          }
        } else {
          // We are drawing a normal row.
          for (var j = 1; j <= Square.height; j++) {
            if (j !== Square.height) {
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