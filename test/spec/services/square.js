'use strict';

describe('Service: SquareService', function () {
  var SquareService;

  beforeEach(function () {
    // load the applications's module
    module('asciiApp');

    // inject the service for testing
    inject(function (_SquareService_) {
      SquareService = _SquareService_;
    });
  });

  // Square Test 1
  it('should have a name "Square"', function () {
    expect(SquareService.name).toBe('Square');
  });

  // Square Test 2
  it('should have a funtion to draw', function () {
    expect(SquareService.draw).toEqual(jasmine.any(Function));
  });

  // Square Test 3
  it('should draw the default square', function () {
    expect(SquareService.draw(10, 'HI', 4)).toBe(
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X H I X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X'
    );
  });

  // Square Test 4
  it('should draw a small square', function () {
    expect(SquareService.draw(2, 'NO', 1)).toBe(
      'N O\n' +
      'X X'
    );
  });

  // Square Test 5
  it('should draw a square with label length equal to height', function () {
    expect(SquareService.draw(5, 'THREE', 3)).toBe(
      'X X X X X\n' +
      'X X X X X\n' +
      'T H R E E\n' +
      'X X X X X\n' +
      'X X X X X'
    );
  });

  // Square Test 6
  it('should draw a square with the odd-length label and even height', function () {
    expect(SquareService.draw(4, 'TWO', 2)).toBe(
      'X X X X\n' +
      ' T W O \n' +
      'X X X X\n' +
      'X X X X'
    );
  });

  // Square Test 7
  it('should draw a square with an even-length label and an odd height', function () {
    expect(SquareService.draw(5, 'TWO', 3)).toBe(
      'X X X X X\n' +
      'X X X X X\n' +
      'X T W O X\n' +
      'X X X X X\n' +
      'X X X X X'
    );
  });

  // Square Test 8
  it('should do its best to print a square with too long of a label.', function () {
    expect(SquareService.draw(10, 'IM A LONG LABEL', 5)).toBe(
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'I M   A   L O N G  \n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X'
    );
  });

  // Square Test 9
  it('should draw a square without a label', function () {
    expect(SquareService.draw(5, '', 3)).toBe(
      'X X X X X\n' +
      'X X X X X\n' +
      'X X X X X\n' +
      'X X X X X\n' +
      'X X X X X'
    );
  });

  // Square Test 10
  it('should draw the smallest square possible', function () {
    expect(SquareService.draw(1, 'SMALL', 1)).toBe('S');
  });

  // Square Test 11
  it('should draw a square with an odd-lenth label on an even-length row', function () {
    expect(SquareService.draw(8, 'ODD', 5)).toBe(
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X  O D D  X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X'
    );
  });

  // Square Test 12
  it('should draw a square with an even-lenth label on an odd-length row', function () {
    expect(SquareService.draw(7, 'FOUR', 5)).toBe(
      'X X X X X X X\n' +
      'X X X X X X X\n' +
      'X X X X X X X\n' +
      'X X X X X X X\n' +
      'X  F O U R  X\n' +
      'X X X X X X X\n' +
      'X X X X X X X'
    );
  });
});