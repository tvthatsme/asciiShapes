'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('asciiApp'));

  var MainCtrl,
    scope,
    SquareService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
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
      'X X X X X X X X X X\n');
  });
  
//  it('should suport a square shape', function () {
//    expect(scope.shapes).toContain()
//  });
  
  // Test setting height
  /////////////////////////////////////////////////////////////////////////////
  it('should have a default height of 10', function () {
    expect(scope.shapeHeight).toBe(10);
  });
  
  it('should not allow a height less than 1', function () {
    scope.setHeight(0);
    expect(scope.shapeHeight).toBe(1);
  })
  
  // Test setting label
  /////////////////////////////////////////////////////////////////////////////
  it('should have a default label of "HI"', function () {
    expect(scope.shapeLabel).toBe('HI');
  });
  
  // Test setting label row
  /////////////////////////////////////////////////////////////////////////////
  it('should have a default label row of 4', function () {
    expect(scope.labelRow).toBe(4);
  });
  
  //          X         
  //       X X X X      
  //    X X X X X X X    
  // X X X X H I X X X X
  // X X X X X X X X X X
  // X X X X X X X X X X
  // X X X X X X X X X X
  //    X X X X X X X   
  //       X X X X      
  //          X         
  
});
