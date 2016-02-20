# Ascii Shapes

This is a simple web application to draw ascii shapes

The application should take at least these inputs, but it could take more:  

1. Which shape to draw (select box)
  * Choices should include triangle, diamond, rectangle, and square.

2. Height of the shape (text box)

3. Label to display (text box)
  * Choosing the label should be optional for the user.
  * Default: “HI”

4. Row on which to display text label (text box)
  * Choosing the label row should be optional for the user.
  * Default: 4


It should be impossible to crash the program through bad input. Handle most common validation errors that may occur and notify the end-user. All code must be unit tested.

A sample shape might look like this:

             X
            X X
           X X X
          X X X X
         X X X X X
        X X X X X X
       X X X X X X X
      X S A M P L E X
     X X X X X X X X X
    X X X X X X X X X X



This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
