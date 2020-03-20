import './style.css';
const products = require('./products.json');

// Homework:
// show every product in the table (check the table in "index.html")
// in the table you need to show the following datas:
// - name
// - first category
// - number of pictures
// - price
// - quantity

// if the user clicks on a row, then in the "product-details"
// show the following datas:
// - name
// - each categories
// - pictures
// - prices
// - quantity

// there are some tips around (in index.html and in this file)
// you can modify everything in index.js
// but you are forbidden to change anything in the index.html
// and I advise not to touch style.css unless you want to add a shiny style for
// your website :D

// IMPORTANT: The content of this file is only here to help You
// if you'd like to solve the problem with a different solution
// feel free to do it =)
// So you can modify, delete, rewrite everything here

const appDiv = document.getElementById('app');

function addRowsToTable() {
  // TODO: add each generated row to the table
}

function generateRow(product) {
  // TODO: generate the rows for the table
  // (this means you should add each necessary cell to the row)
  // and don't forget to add a click handler :)
}

function addNewCellToRow(row, textContent) {
  // TODO: add the generated cell to the row
}

function generateTableCell(textContent) {
  // TODO: generate a cell for the row
}


// This is a function that will be invoked when the user clicks on a row
// in the table
// when attaching this to an element click
// you can use .bind() or you can wrap this function
// with an another function
function showDetails(product) {
  // TODO: manipulate the 
}

function populateCategoriesContainer(categoriesContainerDiv, categories) {
  // TODO: add each category to the 'categoriesDiv'
  // in index.html, you can see that it is 3rd element inside the "product-details"
}

function populateImgContainer(imgContainerDiv, images) {
  // TODO: add each image to the 'imagesDiv'
  // in index.html, you can see that it is 4th element inside the "product-details"
}

// Consider the case when you've already selected a row before, and you've populated the image container, or the categoriesContainer
// first you need to remove all the images from the previous product,
// and then re-populate it with the new product's images
function removeAllChildrenOfElement(element) {
  // TODO: remove all children of the given element
}

addRowsToTable();