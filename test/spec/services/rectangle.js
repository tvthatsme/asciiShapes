'use strict';

describe('Service: RectangleService', function () {
  var RectangleService;

  beforeEach(function () {
    // load the applications's module
    module('asciiApp');
    
    // inject the service for testing
    inject(function (_RectangleService_) {
      RectangleService = _RectangleService_;
    });
  });

  it('should have a name "Rectangle"', function () {
    expect(RectangleService.name).toBe("Rectangle");
  });

  it('should have a funtion to draw', function() {
    expect(RectangleService.draw).toEqual(jasmine.any(Function));
  });
  
  it('should draw the default rectangle', function () {
    expect(RectangleService.draw(10, 'HI', 4)).toBe(
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X  H I  X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X'
    );
  });
});