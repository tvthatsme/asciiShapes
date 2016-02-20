'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('asciiApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should start with a square drawn', function () {
    expect(scope.shape).toBe(
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X H I X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X\n' +
      'X X X X X X X X X X');
  });

  // Test shapes supported
  /////////////////////////////////////////////////////////////////////////////
  it('should support a square shape', function () {
    var shapeNames = [];
    for (var i = 0; i < scope.shapes.length; i++) {
      shapeNames.push(scope.shapes[i].name);
    }
    
    expect(shapeNames).toContain('Square');
  });
  
  it('should support a triangle shape', function () {
    var shapeNames = [];
    for (var i = 0; i < scope.shapes.length; i++) {
      shapeNames.push(scope.shapes[i].name);
    }
    
    expect(shapeNames).toContain('Triangle');
  });
  
  it('should support a diamond shape', function () {
    var shapeNames = [];
    for (var i = 0; i < scope.shapes.length; i++) {
      shapeNames.push(scope.shapes[i].name);
    }
    
    expect(shapeNames).toContain('Diamond');
  });
  
  it('should support a rectangle shape', function () {
    var shapeNames = [];
    for (var i = 0; i < scope.shapes.length; i++) {
      shapeNames.push(scope.shapes[i].name);
    }
    
    expect(shapeNames).toContain('Rectangle');
  });

  // Test setting height
  /////////////////////////////////////////////////////////////////////////////
  it('should have a default height of 10', function () {
    expect(scope.shapeHeight).toBe(10);
  });

  it('should not allow a height less than 1', function () {
    scope.setHeight(0);
    expect(scope.shapeHeight).toBe(1);
  });

  it('should not allow a height greater than 100', function () {
    scope.setHeight(101);
    expect(scope.shapeHeight).toBe(100);
  });

  it('should allow a valid height to be set', function () {
    scope.setHeight(33);
    expect(scope.shapeHeight).toBe(33);
  });

  it('should be okay with being blank', function () {
    scope.setHeight('');
    expect(scope.shapeHeight).toBe(1);
  });

  // Test setting label
  /////////////////////////////////////////////////////////////////////////////
  it('should have a default label of "HI"', function () {
    expect(scope.shapeLabel).toBe('HI');
  });

  it('should trim out leading spaces', function () {
    scope.setLabel('  LEADING SPACE');
    expect(scope.shapeLabel).toBe('LEADING SPACE');
  });

  it('should trim out trailing spaces', function () {
    scope.setLabel('TRAILING SPACE    ');
    expect(scope.shapeLabel).toBe('TRAILING SPACE');
  });

  it('should accept a valid label', function () {
    scope.setLabel('VALID LABEL');
    expect(scope.shapeLabel).toBe('VALID LABEL');
  });

  it('should be okay with being blank', function () {
    scope.setLabel('');
    expect(scope.shapeLabel).toBe('');
  });

  // Test setting label row
  /////////////////////////////////////////////////////////////////////////////
  it('should have a default label row of 4', function () {
    expect(scope.labelRow).toBe(4);
  });

  it('should not allow a label row less than 1', function () {
    scope.setLabelRow(0);
    expect(scope.labelRow).toBe(1);
  });

  it('should not allow a label row greater than the shape height', function () {
    scope.setHeight(20);
    scope.setLabelRow(21);
    expect(scope.labelRow).toBe(20);
  });

  it('should allow a valid label row number to be set', function () {
    scope.setHeight(5);
    scope.setLabelRow(3);
    expect(scope.labelRow).toBe(3);
  });

  it('should be okay with being blank', function () {
    scope.setLabelRow('');
    expect(scope.labelRow).toBe(1);
  });
});