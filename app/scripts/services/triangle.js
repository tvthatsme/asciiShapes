/* jshint strict: false, -W117 */

'use strict';

asciiApp.factory('TriangleService', function () {
  var Triangle = {};
  
  // Set the name of the Triangle
  Triangle.name = 'Triangle';
  
  Triangle.draw = function (height, label, labelRow) {
    var asciiString = '',
      printChar = 'X',
      numPrintedInRow;
      
      // Draw a number of rows
      for (var row = 1; row <= height; row++) {
        if (row === labelRow) {
          // Drawing a row with a label
          var l;
          
          // First print all the letters of the label
          for (l = 0; l < label.length; l++) {
            asciiString += (label.substr(l, 1) + ' ');
          }
          asciiString += '\n';
        } else {
          // Drawing a row without a label
          // Increment the number of caracters printed for each row that we print
          numPrintedInRow = 0;

          while (numPrintedInRow < row) {
            asciiString += (printChar + ' ');
            numPrintedInRow++;
          }
          asciiString += '\n';
        }
      }
      
      return asciiString;
  };
  
  return Triangle;
});