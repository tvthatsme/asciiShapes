/* jshint strict: false, -W117 */

'use strict';

// Service to draw a square shape
asciiApp.factory('SquareService', function () {
  var Square = {};

  // Provide the square with a name
  Square.name = 'Square';

  // Draw an ascii square
  Square.draw = function (height, label, labelRow) {
    var asciiString = '',
      printChar = 'X',
      space = ' ',
      newLine = '\n',
      row;
    
    // Before we start drawing the square, adjust the label if its length
    // and the square's length clash.
    if ((label.length) && ((label.length % 2) !== (height % 2)) && (height >= (label.length + 2))) {
      label = space + label + space;
    }

    // Draw a number of rows
    for (row = 1; row <= height; row++) {
      // The square does not need to have a label
      if ((label.length) && (row === labelRow)) {
        // Drawing the label row.
        var labelRowStr = '',
          rowRequiredLength = ((2 * height) - 1),
          labelCharsPrinted = 0;

        // Loop until the label row reaches its required length
        while (labelRowStr.length < rowRequiredLength) {
          
          // Print the label as a first priority
          if (labelCharsPrinted < label.length) {
            if (labelCharsPrinted === (label.length - 1)) {
              // Print the last character in the label
              labelRowStr += label.substr(labelCharsPrinted, 1);
            } else {
              // Print the character and a space
              labelRowStr += (label.substr(labelCharsPrinted, 1) + space);
            }
            
            // Increment the number of label characters printed.
            labelCharsPrinted++;
          } else {
            // The label is its entirety has been printed, finish filling the row
            if (labelRowStr.substr(0, 1) === space) {
              labelRowStr = printChar + labelRowStr + printChar;
            } else {
              labelRowStr = space + labelRowStr + space;
            }
          }
        }
        
        // Clean up in case an extra space was printed
        labelRowStr = labelRowStr.substr(0, ((height * 2) - 1));
        
        // Add a new line character if this isn't the last row
        if (row < height) {
          labelRowStr += newLine;
        }

        // Add the whole row to the asciiString
        asciiString += labelRowStr;
      } else {
        // Drawing a normal row.
        for (var j = 1; j <= height; j++) {
          if (j !== height) {
            // Character in the middle of the line
            asciiString += (printChar + space);
          } else {
            // Special case for the end of a line

            // Do NOT print a new line for the last row of the square
            if (row === height) {
              asciiString += printChar;
            } else {
              asciiString += (printChar + newLine);
            }
          }
        }
      }
    }

    // Return the ascii shape
    return asciiString;
  };

  return Square;
});