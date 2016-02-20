/* jshint strict: false, -W117 */

'use strict';

// Service to draw a diamond shape
asciiApp.factory('DiamondService', function () {
  var Diamond = {};

  // Provide the diamond with a name
  Diamond.name = 'Diamond';

  // Draw an ascii diamond
  Diamond.draw = function (height, label, labelRow) {
    // Define the variables for the function
    var asciiString = '',
      row,
      printChar = 'X',
      space = ' ',
      newLine = '\n',
      charsPrintedInRow,
      charsToPrintInRow = 1,
      rowToPrint = '';

    // Draw a number of rows
    for (row = 1; row <= height; row++) {
      // Re-initialize things
      charsPrintedInRow = 0;
      rowToPrint = '';

      // If the label should be displayed and we are on the label row...
      if ((label.length) && (row === labelRow)) {
        // Adjust the label if its length and the row's length clash.
        if (((label.length % 2) !== (charsToPrintInRow % 2)) && (charsToPrintInRow > (label.length + 2))) {
          label = space + label + space;
        }
      }

      // Print the number of visible characters
      while (charsPrintedInRow < charsToPrintInRow) {
        // The diamond is not required to have a label.
        if ((label.length) && (row === labelRow)) {
          // Print the label as a first priority
          if (charsPrintedInRow < label.length) {
            if (charsPrintedInRow === (label.length - 1)) {
              // Print the last character in the label
              rowToPrint += label.substr(charsPrintedInRow, 1);
            } else {
              // Print a character of the label and a space
              rowToPrint += (label.substr(charsPrintedInRow, 1) + space);
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
        charsPrintedInRow++;
      }

      // Pad the front of the row with spaces if needed. This will give the
      // block of characters a diamond appearance.
      if (charsPrintedInRow < height) {
        while (charsPrintedInRow < (height / 2)) {
          rowToPrint = space + rowToPrint;
          charsPrintedInRow++;
        }
      }

      // Pad the back of the row to give the ascii shape a square outline
      while (rowToPrint.length < height) {
        rowToPrint += space;
      }

      // Add the row to the ascii string
      asciiString += rowToPrint.substring(0, height);

      // If this is not the last line, add a new line feed
      if (row !== height) {
        asciiString += newLine;
      }

      // When finished printing row, recalculate then number to print the
      // next row down.
      if (row < (height / 2)) {
        charsToPrintInRow++;
      } else {
        charsToPrintInRow--;
      }
    }

    return asciiString;
  };

  return Diamond;
});