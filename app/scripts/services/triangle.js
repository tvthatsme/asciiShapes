/* jshint strict: false, -W117 */

'use strict';

// Service to draw a triangle shape
asciiApp.factory('TriangleService', function () {
  var Triangle = {};

  // Provide the triangle with a name
  Triangle.name = 'Triangle';

  // Draw an ascii triangle
  Triangle.draw = function (height, label, labelRow) {
    var asciiString = '',
      row,
      printChar = 'X',
      space = ' ',
      newLine = '\n',
      numPrintedInRow,
      charsToPrintInRow = 1,
      rowToPrint = '';

    // Draw a number of rows
    for (row = 1; row <= height; row++) {
      // Reinitialize things
      numPrintedInRow = 0;
      rowToPrint = '';
      
      // If the label has a length (should be drawn)...
      // and the label row is being printed.
      if ((label.length) && (row === labelRow)) {
        // Adjust the label if its length and the row's length clash.
        if (((label.length % 2) !== (charsToPrintInRow % 2)) && (charsToPrintInRow > (label.length + 2))) {
          label = space + label + space;
        }
      }

      // Print the number of visible characters
      while (numPrintedInRow < charsToPrintInRow) {
        // The triangle does not need to have a label
        if ((label.length) && (row === labelRow)) {
          // Printing the label row

          // Print a label character as a first priority
          if (numPrintedInRow < label.length) {
            if (numPrintedInRow === (label.length - 1)) {
              // Print the last character in the label
              rowToPrint += label.substr(numPrintedInRow, 1);
            } else {
              // Print the character and a space
              rowToPrint += (label.substr(numPrintedInRow, 1) + space);
            }
          } else {
            // If the label is its entirety has been printed, finish filling
            // the row with a patern of spaces and X's
            if (rowToPrint.substr(0, 1) === space) {
              rowToPrint = printChar + rowToPrint + printChar;
            } else {
              rowToPrint = space + rowToPrint + space;
            }
          }
        } else {
          // Printing a normal row character
          rowToPrint += (printChar + space);
        }

        // Increment the number of characters printed in the row
        numPrintedInRow++;
      }

      // Pad the front of the row with spaces if needed. This will give the
      // block of characters a diamond appearance.
      while (numPrintedInRow < height) {
        rowToPrint = space + rowToPrint;
        numPrintedInRow++;
      }

      // Pad the back of the row to give the ascii shape a square outline
      while (rowToPrint.length < ((height * 2) - 1)) {
        rowToPrint += space;
      }

      // Add the row to the ascii string
      asciiString += rowToPrint.substr(0, ((height * 2) - 1));

      // If this is not the last line, add a new line feed
      if (row !== height) {
        asciiString += newLine;
      }

      // When finished printing row, recalculate then number to print in the
      // next row down.
      charsToPrintInRow++;
    }

    return asciiString;
  };

  return Triangle;
});