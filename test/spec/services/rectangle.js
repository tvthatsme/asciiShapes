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

  // Rectangle Test 1
  it('should have a name "Rectangle"', function () {
    expect(RectangleService.name).toBe('Rectangle');
  });

  // Rectangle Test 2
  it('should have a funtion to draw', function () {
    expect(RectangleService.draw).toEqual(jasmine.any(Function));
  });

  // Rectangle Test 3
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

  // Rectangle Test 4
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

  // Rectangle Test 5
  it('should draw a small rectangle', function () {
    expect(RectangleService.draw(2, 'TEST', 1)).toBe(
      'T E S\n' +
      'X X X'
    );
  });

  // Rectangle Test 6
  it('should draw the smallest rectangle possible', function () {
    expect(RectangleService.draw(1, 'SMALL', 1)).toBe('S');
  });

  // Rectangle Test 7
  it('should draw a rectangle with a label-length one character short of its lenth', function () {
    expect(RectangleService.draw(6, 'RECEIVED', 2)).toBe(
      'X X X X X X X X X\n' +
      ' R E C E I V E D \n' +
      'X X X X X X X X X\n' +
      'X X X X X X X X X\n' +
      'X X X X X X X X X\n' +
      'X X X X X X X X X'
    );
  });

  // Rectangle Test 8
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

  // Rectangle Test 9
  it('should draw a rectangle with an odd-length title and even-length row', function () {
    expect(RectangleService.draw(7, 'ODD', 3)).toBe(
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X  O D D  X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X'
    );
  });

  // Rectangle Test 10
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