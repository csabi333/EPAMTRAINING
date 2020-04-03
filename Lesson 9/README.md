# EPAM Debrecen JavaScript Training - 2020
# Lesson 9 - Modules, MVC, Linters

https://community-z.com/events/js-training-2020

## Slides and code examples
Slides can be found under `/docs/epam-debrecen-javascript-training-2020-module-mvc-linters.pptx`.

Solution for the MVC example exercise (16th slide) is at https://stackblitz.com/edit/js-mvc but saved a copy into `/js-mvc-example`.

The HMVC example (22th slide) is inside the `/src` directory.

## Homework

The description of the homework can be found in the presentation (slides 23 and 31-32). Use this web application as a starting point for your homework.

When you click on a product on the index page, the product page loads and displays the details of the clicked product. When getting the product's data from the server, use the product's id from the URL.

Implement the product page under the `/src/ui/assets/js/pages/product.page` folder. The main HTML of this page is `/src/ui/assets/product.html`.

## Web application for \<epam> UI trainings in the Debrecen office.

#### Prerequisites
* [NodeJS (8.6.0)](https://nodejs.org/en/)
* NPM
* [Gulp](https://gulpjs.com/)
* [Yarn](https://yarnpkg.com/en/)

#### Install Dependencies
```
yarn install
```

#### Build
```
gulp build
```

#### Run
```
gulp
```