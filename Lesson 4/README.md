# EPAM Debrecen JavaScript Training - 2020

https://community-z.com/events/js-training-2020

# Lesson 4 - JavaScript Basics: An Introduction

## Slides

Slides can be found under `/slides/epam-debrecen-javascript-training-2020-js-basics.pptx`.

### Agenda
- scopes & this
- objects & prototypes
- hoisting
- closures
- modules

## Homework


Define a `Circle` class (constructor function) the following way:
- the input parameter of the constructor is `r`, the radius of the circle
- use `Object.defineProperty()` on `Circle.prototype` to define getters for the area and the circumference of the circle
- you can reuse code from example 2
- instances can be made like this: `var c1 = new Circle(10)`
- after a new instance was made `c1.area` returns the correct value

Try to create the class in a separate file (e.g. `circle.js`), with an IIFE, like in the slides, then include it in the `index.html`, so it can be used from other JavaScript files.

If you'd like to use the ES6 `class` syntax, you can, but try to solve it with prototypes after you did the homework.

### Nice-to-have homework

I've refactored the logger in such way, that it has its own module in `log.js`. You can see that in the main file `log` calls were changed to `logger.log`

If you feed comfortable / bored after the first task, you can try to break down the four examples to four modules.
- each module should have a `run` function
- the run function should use the examples form the `index.js`
- you can customize them as much as you want, you don't have to strictly stick with this construction
    - you can introduce flags for the logging if it's disabled or not, etc.
    - you can put JS files under `/js`, etc.
    - be creative
- in `index.js` you call call them like this:

```javascript
(function() {
    first.run();
    second.run();
    third.run();
    fourth.run();
})();
```
- your index.html may look something like this:
```HTML
        <!-- rest of HTML -->
        <!-- pay attention to possible dependencies between modules -->
        <script src="log.js"></script>
        <script src="first.module.js"></script>
        <script src="second.module.js"></script>
        <script src="third.module.js"></script>
        <script src="fourth.module.js"></script>
        <script src="index.js"></script>
    </body>
</html>
```
