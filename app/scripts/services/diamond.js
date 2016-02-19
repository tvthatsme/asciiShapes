/* jshint strict: false, -W117 */

'use strict';

asciiApp.factory('DiamondService', function () {
  var Diamond = {};

  // Set the name of the Diamond
  Diamond.name = 'Diamond';

  Diamond.draw = function (height, label, labelRow) {
    var asciiString = '',
      row,
      printChar = 'X',
      space = ' ',
      numPrintedInRow,
      charsToPrintInRow = 1,
      rowToPrint = '';

    // Draw a number of rows
    for (row = 1; row <= height; row++) {
      // Reinitialize things
      numPrintedInRow = 0;
      rowToPrint = '';
      
      // Print the number of visible characters
      while (numPrintedInRow < charsToPrintInRow) {
        // The diamond is not required to have a label
        if ((label.length) && (row === labelRow)) {
          // Printing the label row
          
          // Print the label as a first priority
          if (numPrintedInRow < label.length) {
            if (numPrintedInRow === (label.length - 1)) {
              // Print the last character in the label
              rowToPrint += label.substr(numPrintedInRow, 1);
            } else {
              // Print the character and a space
              rowToPrint += (label.substr(numPrintedInRow, 1) + space);
            }
          } else {
            // The label is its entirety has been printed, finish filling the row
            if (rowToPrint.substr(0, 1) === space) {
              rowToPrint = printChar + rowToPrint + printChar;
            } else {
              rowToPrint = space + rowToPrint + space;
            }
          }
        } else {
          // Printing a normal row
          rowToPrint += (printChar + space);
        }
        
        // Increment the number of characters printed in the row
        numPrintedInRow++;
      }
      
      // Pad the front of the row with spaces if needed. This will give the
      // block of characters a diamond appearance.
      if (numPrintedInRow < height) {
        while (numPrintedInRow < (height / 2)) {
          rowToPrint = space + rowToPrint;
          numPrintedInRow++;
        }
      }
      
      // Pad the back or the row
      while (rowToPrint.length < height) {
        rowToPrint += space;
      }
      
      // Add the row to the ascii string
      asciiString += rowToPrint.substring(0, height);
      
      // If this is not the last line, add a new line feed
      if (row !== height) {
        asciiString += '\n';
      }
      
      // When finished printing row, recalculate then number to print in the
      // next row down.
      if (row < (height) / 2) {
        charsToPrintInRow++;
      } else {
        charsToPrintInRow--;
      }
    }

    return asciiString;
  };

  return Diamond;
});