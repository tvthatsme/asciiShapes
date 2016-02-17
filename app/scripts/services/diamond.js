/* jshint strict: false, -W117 */

'use strict';

asciiApp.factory('DiamondService', function () {
  var Diamond = {};

  // Set the name of the Diamond
  Diamond.name = 'Diamond';

  Diamond.draw = function (height, label, labelRow) {
    var asciiString = '',
      printChar = 'X',
      numPrintedInRow,
      charsToPrintInRow = 1,
      rowToPrint = '';

    // Draw a number of rows
    for (var row = 1; row <= height; row++) {
      // Drawing diamonds is easy if we have an odd number of rows.
      
      // Reinitialize things
      numPrintedInRow = 0;
      rowToPrint = '';
      
      // Print the number of visible characters
      while (numPrintedInRow < charsToPrintInRow) {
        rowToPrint += (printChar + ' ');
        numPrintedInRow++;
      }
      
      // Pad the front of the row with spaces if needed. This will give the
      // block of characters a diamond appearance.
      if (numPrintedInRow < height) {
        while (numPrintedInRow < (height / 2)) {
          rowToPrint = ' ' + rowToPrint;
          numPrintedInRow++;
        }
      }
      
      // Addd a new line feed
      asciiString += (rowToPrint + '\n');
      
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