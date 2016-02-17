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

  it('should have a name "Diamond"', function () {
    expect(DiamondService.name).toBe("Diamond");
  });

  it('should have a funtion to draw', function() {
    expect(DiamondService.draw).toEqual(jasmine.any(Function));
  });
  
  it('should draw the default diamond', function () {
    expect(DiamondService.draw(10, 'HI', 4)).toBe(
      '    X    \n' +
      '   X X   \n' +
      '  X X X  \n' +
      ' X H I X \n' +
      'X X X X X\n' +
      ' X X X X \n' +
      '  X X X  \n' +
      '   X X   \n' +
      '    X    \n' +
      '\n'
    );
  });
});