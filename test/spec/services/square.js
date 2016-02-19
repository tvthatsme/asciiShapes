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

  it('should have a name "Square"', function () {
    expect(SquareService.name).toBe('Square');
  });

  it('should have a funtion to draw', function () {
    expect(SquareService.draw).toEqual(jasmine.any(Function));
  });

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

  it('should draw a square', function () {
    expect(SquareService.draw(2, 'NO', 1)).toBe(
      'N O\n' +
      'X X'
    );
  });

  it('should draw a square', function () {
    expect(SquareService.draw(5, 'THREE', 3)).toBe(
      'X X X X X\n' +
      'X X X X X\n' +
      'T H R E E\n' +
      'X X X X X\n' +
      'X X X X X'
    );
  });

  it('should draw a square with the label TWO', function () {
    var label = 'TWO';

    expect(SquareService.draw(4, label, 2)).toBe(
      'X X X X\n' +
      ' T W O \n' +
      'X X X X\n' +
      'X X X X'
    );

    expect(SquareService.draw(5, label, 3)).toBe(
      'X X X X X\n' +
      'X X X X X\n' +
      'X T W O X\n' +
      'X X X X X\n' +
      'X X X X X'
    );

    // Most interesting case is even height and odd label.length
    expect(SquareService.draw(6, label, 3)).toBe(
      'X X X X X X\n' +
      'X X X X X X\n' +
      'X  T W O  X\n' +
      'X X X X X X\n' +
      'X X X X X X\n' +
      'X X X X X X'
    );

    // Most interesting case is even height and odd label.length
    expect(SquareService.draw(8, label, 4)).toBe(
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X  T W O  X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X\n' +
      'X X X X X X X X'
    );
  });
  
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
  
  it('should draw a square without a label', function () {
    expect(SquareService.draw(5, '', 3)).toBe(
      'X X X X X\n' +
      'X X X X X\n' +
      'X X X X X\n' +
      'X X X X X\n' +
      'X X X X X'
    );
  });
  
  it('should draw the smallest square possible', function () {
    expect(SquareService.draw(1, 'SMALL', 1)).toBe('S');
  })
});