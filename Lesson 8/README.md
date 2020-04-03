# EPAM Debrecen JavaScript Training - 2020

https://community-z.com/events/js-training-2020

# Lesson 8 - Asynchronous JavaScript #3

## Slides
Slides can be found under `/slides/epam-debrecen-javascript-training-2020-async-js-3.pptx`.

All links in the presentation have been extracted here below for your convenience.

## Agenda

- Recap: Promises & async/await
- What is RxJS
- What is functional programming
- Using RxJS
- Comparison with Promises
- Examples of RxJS usecases

## Homework

Fork your own version of the wiki search we created during the presentation. Feel free to tackle any of these tasks as only task 3 is dependent on 2.
Any other ideas to improve the search experience are also welcome!
 1. Limit the visible search results to a configurable value.
 2. While a search is loading write a “Loading…” text in a DOM element.
3. Modify the current behavior to have working links to the articles (that open the relevant wiki article).
4. Add some debounce to the input changes (generally 300ms is a safe bet) so that we limit the number of API calls we make.
5. Create a search history field (a simple unordered list will do) where you add each clicked result but clicking the same result twice in a row shouldn’t be added to the history.
6. Create your own search using a public API!

Wiki search can be found here:
- [WikiSearch with RxJS](https://stackblitz.com/edit/rxjs-presentation-homework)
- [WikiSearch with only promises](https://stackblitz.com/edit/rxjs-presentation-homework)

Please feel free to consult the examples from the presentation:
- [RxJS creation examples](https://stackblitz.com/edit/rxjs-creation-examples)
- [RxJS subscription examples](https://stackblitz.com/edit/rxjs-subscription-examples)
- [RxJS basic operations](https://stackblitz.com/edit/rxjs-basic-operations)
- [RxJS advanced operations](https://stackblitz.com/edit/rxjs-advanced-operations)

### Useful links
- [RxMarbles: Interactive diagrams of Rx Observables](https://rxmarbles.com/)
- [Introduction - Learn RxJS](https://www.learnrxjs.io/)
- [Observer pattern](https://refactoring.guru/design-patterns/observer)
- [Iterator pattern](https://refactoring.guru/design-patterns/iterator)
- [Introduction to functional programming](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/)
- [Understanding Higher-Order Functions in JavaScript](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)
- [Hot vs Cold Observables](https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339)
- [Even more RxJS recipes (games, tools) with online examples](https://github.com/btroncone/learn-rxjs/tree/master/recipes)