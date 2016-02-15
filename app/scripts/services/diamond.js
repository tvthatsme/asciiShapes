'use strict';

asciiApp.factory('DiamondService', function () {
  var Diamond = Object.create(Shape);
  
  // Set the name of the Diamond
  Diamond.name = 'Diamond';
  
  Diamond.draw = function () {
    console.log('This is going to draw a ' + Diamond.name + ' with height ' + Diamond.height); 
  };
  
  return Diamond;
});
