/* jshint strict: false, -W117 */

'use strict';

asciiApp.factory('TriangleService', function () {
  var Triangle = Object.create(Shape);
  
  // Set the name of the Triangle
  Triangle.name = 'Triangle';
  
  Triangle.draw = function () {
    console.log('This is going to draw a ' + Triangle.name);
    var asciiString = '',
      printChar = 'X',
      numPrintedInRow;
      
      // Draw a number of rows
      for (var row = 1; row <= Triangle.height; row++) {
        if (row === Triangle.labelRow) {
          // Drawing a row with a label
          var l;
          
          // First print all the letters of the label
          for (l = 0; l < Triangle.label.length; l++) {
            asciiString += (Triangle.label.substr(l, 1) + ' ');
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