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
    expect(RectangleService.name).toBe('Rectangle');
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
  
  it('should draw a rectangle without a label', function () {
    expect(RectangleService.draw(10, '', 4)).toBe(
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X\n' +
      'X X X X X X X X X X X X X X X'
    );
  });
  
  it('should draw a small rectangle', function () {
    expect(RectangleService.draw(2, 'TEST', 1)).toBe(
      'T E S\n' +
      'X X X'
    );
  });
  
  it('should draw the smallest rectangle possible', function () {
    expect(RectangleService.draw(1, 'SMALL', 1)).toBe('S');
  });

  it('should draw a rectangle with an even-length title and odd-length row', function () {
    expect(RectangleService.draw(6, 'EVEN', 3)).toBe(
      'X X X X X X X X X\n' +
      'X X X X X X X X X\n' +
      'X X  E V E N  X X\n' +
      'X X X X X X X X X\n' +
      'X X X X X X X X X\n' +
      'X X X X X X X X X'
    );
  });
  
  it('should do its best to draw a rectangle with a length longer than its width', function () {
    expect(RectangleService.draw(5, 'LONG LABEL HERE', 2)).toBe(
      'X X X X X X X\n' +
      'L O N G   L A\n' +
      'X X X X X X X\n' +
      'X X X X X X X\n' +
      'X X X X X X X'
    );
  });
});