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
    expect(SquareService.name).toBe("Square");
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
      'X X X X X X X X X X\n'
    );
  });

  it('should draw a square', function() {
    expect(SquareService.draw(2, 'NO', 1)).toBe(
      'N O\n' +
      'X X'
    );
  });
});