
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

## Installation

Make sure [Ruby][1], [Compass][2], [Node][3] (at least version 0.10.0 or higher), and [Git][4] are installed on your system. Then complete the remaining steps from your favorite version of command line.

Make sure bower is installed.
```
npm install -g bower
```


Get the repository from GitHub.
```
git clone https://github.com/tvthatsme/asciiShapes.git
```


Install the required packages.
```
npm install
bower install
```


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Future Work

I would also like to mention some improvements to the demo that I would like to see or add in the future. I've completed all of the requirements but there is always room for improvement and this project is no different. Some things I would like to improve on are:

* Adhere more to Angular.js best practices - I chose to use Angular to better familiarize myself with the framework. Because of the timeframe of the demo project, I took a ready-fire-aim approach to development and getting things working. Along the way I realized that I might be using services/directives/controllers the wrong way. I'd like to improve these Angular-specific practices going forward.
* Add animations - Would be a nice touch to add to shape transitions and alert messages. I had originally thought of a matrix-type transition as shape parameters change but have yet to implement that.
* Add "copy to clipboard" functionality for copying the ascii shape to the user's clipboard.
* Better handle long labels - As the app is programmed right now, the shape displays as many characters of the label as the label row allows while keeping the shape true to its form. It would be a nice touch to wrap the labels across multiple lines.
* The shape's scroll bars are visible in Windows browsers (IE and Chrome tested) despite the shape's size or need for scrolling. This is bad design and should be fixed.

  [1]: https://www.ruby-lang.org/en/documentation/installation/
  [2]: http://compass-style.org/install/
  [3]: https://nodejs.org/en/
  [4]: http://git-scm.com/