'use strict';

asciiApp.factory('SquareService', function () {
  var Square = {};

  // Set the name of the square
  Square.name = 'Square';

  Square.draw = function (height, label, labelRow) {
    var asciiString = '',
      printChar = 'X',
      space = ' ',
      newLine = '\n',
      row;
    
    // Trim out any leading or trailing spaces from the label
    label = label.trim();
    
    // NOTE: Apply a special case for a square
    //  odd label length
    //  even height
    //  height more than label length plus two
    if (((label.length % 2) == 1) && ((height % 2) === 0) && (height >= (label.length + 2))) {
      label = space + label + space;
    }

    // Draw a number of rows
    for (row = 1; row <= height; row++) {
      if (row === labelRow) {
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
        
        // Clean up in case extra space was printed
        labelRowStr = labelRowStr.substr(0, (height*2-1));
        
        // Add a new line character and add the whole row to the asciiString
        asciiString += labelRowStr + newLine;
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