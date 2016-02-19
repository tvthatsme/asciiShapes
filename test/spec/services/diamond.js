'use strict';

describe('Service: DiamondService', function () {
  var DiamondService;

  beforeEach(function () {
    // load the applications's module
    module('asciiApp');

    // inject the service for testing
    inject(function (_DiamondService_) {
      DiamondService = _DiamondService_;
    });
  });

  // Diamond Test 1
  it('should have a name "Diamond"', function () {
    expect(DiamondService.name).toBe('Diamond');
  });

  // Diamond Test 2
  it('should have a funtion to draw', function () {
    expect(DiamondService.draw).toEqual(jasmine.any(Function));
  });

  // Diamond Test 3
  it('should draw the default diamond', function () {
    expect(DiamondService.draw(10, 'HI', 4)).toBe(
      '    X     \n' +
      '   X X    \n' +
      '  X X X   \n' +
      ' X H I X  \n' +
      'X X X X X \n' +
      ' X X X X  \n' +
      '  X X X   \n' +
      '   X X    \n' +
      '    X     \n' +
      '          '
    );
  });

  // Diamond Test 4
  it('should draw a small diamond', function () {
    expect(DiamondService.draw(3, 'UP', 2)).toBe(
      ' X \n' +
      'U P\n' +
      ' X '
    );
  });

  // Diamond Test 5
  it('should draw the smallest possible diamond', function () {
    expect(DiamondService.draw(1, 'SOMETHING THAT WONT BE PRINTED', 1)).toBe(
      'S'
    );
  });

  // Diamond Test 6
  it('should draw a diamond with a label sized just right', function () {
    expect(DiamondService.draw(5, 'TWO', 3)).toBe(
      '  X  \n' +
      ' X X \n' +
      'T W O\n' +
      ' X X \n' +
      '  X  '
    );
  });

  // Diamond Test 7
  it('should draw a diamond with a label too big', function () {
    expect(DiamondService.draw(10, 'BIG LABEL', 2)).toBe(
      '    X     \n' +
      '   B I    \n' +
      '  X X X   \n' +
      ' X X X X  \n' +
      'X X X X X \n' +
      ' X X X X  \n' +
      '  X X X   \n' +
      '   X X    \n' +
      '    X     \n' +
      '          '
    );
  });
  
  // Diamond Test 8
  it('should draw a diamond with an odd-length label on an even-character row', function () {
    expect(DiamondService.draw(10, 'I', 6)).toBe(
      '    X     \n' +
      '   X X    \n' +
      '  X X X   \n' +
      ' X X X X  \n' +
      'X X X X X \n' +
      ' X  I  X  \n' +
      '  X X X   \n' +
      '   X X    \n' +
      '    X     \n' +
      '          '
    );
  });
  
  // Diamond Test 9
  it('should draw a diamond with an even-length label on an odd-character row', function () {
    expect(DiamondService.draw(10, 'HI', 5)).toBe(
      '    X     \n' +
      '   X X    \n' +
      '  X X X   \n' +
      ' X X X X  \n' +
      'X  H I  X \n' +
      ' X X X X  \n' +
      '  X X X   \n' +
      '   X X    \n' +
      '    X     \n' +
      '          '
    );
  });

  // Diamond Test 10
  it('should draw a diamond with an odd-length label on an odd-character row', function () {
    expect(DiamondService.draw(10, 'BIG', 5)).toBe(
      '    X     \n' +
      '   X X    \n' +
      '  X X X   \n' +
      ' X X X X  \n' +
      'X B I G X \n' +
      ' X X X X  \n' +
      '  X X X   \n' +
      '   X X    \n' +
      '    X     \n' +
      '          '
    );
  });
  
  // Diamond Test 11
  it('should draw a diamond with an even-length label on a longer odd-character row', function () {
    expect(DiamondService.draw(10, 'OF', 5)).toBe(
      '    X     \n' +
      '   X X    \n' +
      '  X X X   \n' +
      ' X X X X  \n' +
      'X  O F  X \n' +
      ' X X X X  \n' +
      '  X X X   \n' +
      '   X X    \n' +
      '    X     \n' +
      '          '
    );
  });

  // Diamond Test 12
  it('should draw a diamond with an even-label length on a shorter odd-character row', function () {
    expect(DiamondService.draw(7, 'TO', 3)).toBe(
      '   X   \n' +
      '  X X  \n' +
      '  T O  \n' +
      'X X X X\n' +
      ' X X X \n' +
      '  X X  \n' +
      '   X   '
    );
  });
  
  // Diamond Test 13
  it('should draw a diamond without a label', function () {
    expect(DiamondService.draw(10, '', 2)).toBe(
      '    X     \n' +
      '   X X    \n' +
      '  X X X   \n' +
      ' X X X X  \n' +
      'X X X X X \n' +
      ' X X X X  \n' +
      '  X X X   \n' +
      '   X X    \n' +
      '    X     \n' +
      '          '
    );
  });
});