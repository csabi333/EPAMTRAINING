# EPAM Debrecen JavaScript Training - 2020

https://community-z.com/events/js-training-2020

# Lesson 7 - Asynchronous JavaScript #2

## Slides
Slides can be found under `/slides/epam-debrecen-javascript-training-2020-async-js-2.pptx`.

Horse racing example: `/race`.

Blog example: `/real-example`.

Waiting for Promise inside generator: `/generators`

## Agenda

- ES6
- Promises recap
- Working with Promises
- Generators
- Async / Await

## Homework

You can find the Blog example under `real-example`. The homework is to re-write as much JavaSciprt to ES6 as possible. Feel free to refactor/customize any part of the application.

TypeScript Playground: [link](https://www.typescriptlang.org/play/?noImplicitAny=false&strictNullChecks=false&strictFunctionTypes=false&strictPropertyInitialization=false&strictBindCallApply=false&noImplicitThis=false&noImplicitReturns=false&alwaysStrict=false&esModuleInterop=false&declaration=false&target=1#code/PTAEAsFMBtoewjeQ).

A few customization ideas:

- ES5 modules can be converted into ES6 classes
- you can introduce new constants
- apply more styles
- etc.

Pay attention to possible usage of the spread operator and object/array destructuring.

### Nice-to-have homework

Try to use `async/await` where possible.

### Examples

Variables
```javascript
var a;
const a;
```

Functions
```javascript
function foo() {
    // ...
}
const foo = () => {
    // ...
}
```

Classes
```javascript
var Foo = (function() {
    function Foo() {
        // ...
    }

    return Foo;
})();

class Foo {
    constructor() {
        // ...
    }
}
```
