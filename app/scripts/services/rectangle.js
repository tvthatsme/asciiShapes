'use strict';

asciiApp.factory('RectangleService', function () {
  var Rectangle = Object.create(Shape);
  
  // Set the name of the Rectangle
  Rectangle.name = 'Rectangle';
  
  Rectangle.draw = function () {
    console.log('This is going to draw a ' + Rectangle.name);
  };
  
  return Rectangle;
});
