'use strict';

describe('Service: TriangleService', function () {
  var TriangleService;

  beforeEach(function () {
    // load the applications's module
    module('asciiApp');
    
    // inject the service for testing
    inject(function (_TriangleService_) {
      TriangleService = _TriangleService_;
    });
  });

  it('should have a name "Triangle"', function () {
    expect(TriangleService.name).toBe("Triangle");
  });

  it('should have a funtion to draw', function() {
    expect(TriangleService.draw).toEqual(jasmine.any(Function));
  });
  
  it('should draw the default triangle', function () {
    expect(TriangleService.draw(10, 'HI', 4)).toBe(
      '         X         \n' +
      '        X X        \n' +
      '       X X X       \n' +
      '      X H I X      \n' +
      '     X X X X X     \n' +
      '    X X X X X X    \n' +
      '   X X X X X X X   \n' +
      '  X X X X X X X X  \n' +
      ' X X X X X X X X X \n' +
      'X X X X X X X X X X\n'
    );
  });
});