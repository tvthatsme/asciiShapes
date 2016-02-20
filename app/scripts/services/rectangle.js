/* jshint strict: false, -W117 */

'use strict';

// Service to draw a rectangle shape
asciiApp.factory('RectangleService', function () {
  var Rectangle = {};

  // Provide the rectangle with a name
  Rectangle.name = 'Rectangle';

  // Draw an ascii rectangle
  Rectangle.draw = function (height, label, labelRow) {
    var asciiString = '',
      row,
      length = Math.floor(height * 1.5),
      printChar = 'X',
      space = ' ',
      newLine = '\n';

    // Before we start drawing the rectangle, adjust the label if its length
    // and the rectangle's length clash.
    if ((label.length) && ((label.length % 2) !== (length % 2)) && (length >= (label.length + 2))) {
      label = space + label + space;
    }

    // Draw a number of rows
    for (row = 1; row <= height; row++) {
      // Draw the content of the rows

      // First check if the label has a length (should be drawn)...
      // and if this is the label row
      if ((label.length) && (row === labelRow)) {
        // Drawing the label row.

        var labelRowStr = '',
          rowRequiredLength = ((2 * length) - 1),
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
            // The label is its entirety has been printed, finish filling the
            // row with print characters or spaces.
            if (labelRowStr.substr(0, 1) === space) {
              labelRowStr = printChar + labelRowStr + printChar;
            } else {
              labelRowStr = space + labelRowStr + space;
            }
          }
        }

        // Clean up in case an extra space was printed
        labelRowStr = labelRowStr.substr(0, (length * 2 - 1));

        // Add a new line character if this isn't the last row
        if (row < height) {
          labelRowStr += newLine;
        }

        // Add the whole row to the asciiString
        asciiString += labelRowStr;
      } else {
        // We are drawing a normal row.
        for (var j = 1; j <= length; j++) {
          if (j !== length) {
            asciiString += (printChar + space);
          } else {
            // Special case for the end of a line

            // Don't print a new line for the last row of the rectangle
            if (row === height) {
              asciiString += (printChar);
            } else {
              asciiString += (printChar + newLine);
            }
          }
        }
      }
    }

    return asciiString;
  };

  return Rectangle;
});