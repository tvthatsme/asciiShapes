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

  // Triangle Test 1
  it('should have a name "Triangle"', function () {
    expect(TriangleService.name).toBe('Triangle');
  });

  // Triangle Test 2
  it('should have a funtion to draw', function () {
    expect(TriangleService.draw).toEqual(jasmine.any(Function));
  });

  // Triangle Test 3
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
      'X X X X X X X X X X'
    );
  });

  // Triangle Test 4
  it('should draw a triangle without a label', function () {
    expect(TriangleService.draw(10, '', 4)).toBe(
      '         X         \n' +
      '        X X        \n' +
      '       X X X       \n' +
      '      X X X X      \n' +
      '     X X X X X     \n' +
      '    X X X X X X    \n' +
      '   X X X X X X X   \n' +
      '  X X X X X X X X  \n' +
      ' X X X X X X X X X \n' +
      'X X X X X X X X X X'
    );
  });

  // Triangle Test 5
  it('should draw the smallest triangle possible', function () {
    expect(TriangleService.draw(1, 'S', 1)).toBe('S');
  });

  // Triangle Test 6
  it('should draw a triangle with an odd-length label on an even-length row', function () {
    expect(TriangleService.draw(5, 'BRO', 4)).toBe(
      '    X    \n' +
      '   X X   \n' +
      '  X X X  \n' +
      '  B R 0  \n' +
      'X X X X X'
    );
  });

  // Triangle Test 7
  it('should draw a triangle with an even-length label on an odd-length row', function () {
    expect(TriangleService.draw(8, 'EVEN', 7)).toBe(
      '       X       \n' +
      '      X X      \n' +
      '     X X X     \n' +
      '    X X X X    \n' +
      '   X X X X X   \n' +
      '  X X X X X X  \n' +
      ' X  E V E N  X \n' +
      'X X X X X X X X'
    );
  });

  // Triangle Test 8
  it('should draw a triangle with an even-length label on an odd-length row', function () {
    expect(TriangleService.draw(8, 'UP', 5)).toBe(
      '       X       \n' +
      '      X X      \n' +
      '     X X X     \n' +
      '    X X X X    \n' +
      '   X  U P  X   \n' +
      '  X X X X X X  \n' +
      ' X X X X X X X \n' +
      'X X X X X X X X'
    );
  });

  // Triangle Test 9
  it('should draw a triangle with an even-length label on an even-length row', function () {
    expect(TriangleService.draw(8, 'EVEN', 6)).toBe(
      '       X       \n' +
      '      X X      \n' +
      '     X X X     \n' +
      '    X X X X    \n' +
      '   X X X X X   \n' +
      '  X E V E N X  \n' +
      ' X X X X X X X \n' +
      'X X X X X X X X'
    );
  });

  // Triangle Test 10
  it('should draw a triangle with an odd-length label on an even-length row', function () {
    expect(TriangleService.draw(8, 'BYE', 8)).toBe(
      '       X       \n' +
      '      X X      \n' +
      '     X X X     \n' +
      '    X X X X    \n' +
      '   X X X X X   \n' +
      '  X X X X X X  \n' +
      ' X X X X X X X \n' +
      'X X  B Y E  X X'
    );
  });

  // Triangle Test 11
  it('should draw a triangle with an odd-length label on an odd-length row', function () {
    expect(TriangleService.draw(6, 'ODD', 5)).toBe(
      '     X     \n' +
      '    X X    \n' +
      '   X X X   \n' +
      '  X X X X  \n' +
      ' X O D D X \n' +
      'X X X X X X'
    );
  });
});