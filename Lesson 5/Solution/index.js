import './style.css';
const products = require('./products.json');

let table = document.querySelector("tbody");
let data =Object.keys(products[0]);
var details =document.getElementsByClassName("product-details");
var childNodes = details[0].childNodes;

console.log(products[0]);
console.log(childNodes);

function generateTable(table,data){
  for(let element of data){
    let row =table.insertRow();
    for(let key in element){
      switch(key){
      case '_id': break;
      case 'description':break;
      case 'categories':
                        let cell = row.insertCell();
                        let text = document.createTextNode(element[key][0]);
                        cell.appendChild(text);
                        break;
      case 'images':
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key].length);
                    cell.appendChild(text);
                    break;
      default:
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
      }
    }
  }
}

generateTable(table,products);

function addRowHandlers() {
    var table = document.getElementsByTagName("table");
    var rows = table[0].rows;
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        row.addEventListener('click',showProductDetails);
    }
}

function generateDetails(mouseEvent){
  let row = mouseEvent.toElement.parentElement.rowIndex-1; //here we find which row the user clicked; -1 because array start at 0
  console.log(row+'. row');
   let divCount=0;//we'll count which div are we in
   let pCount=0; //we'll count which paragraph are we in
  for(let i=0;i<childNodes.length;i++){
   switch(childNodes[i].nodeName){//there are comments in the html which are considered as nodes (?)
    case "P" :fillDetailsP(row,i,pCount); //row: we need to pass which row need to be described,i: the index of the child in the product details container
              pCount+=1;
              break;
    case "DIV" :fillDetailsDiv(row,i,divCount);//same but for the divs
                divCount+=1;
                break;
    default:break;
    }
  }
  
}

function fillDetailsDiv(row,i,divCount){
  if (divCount){
    for (let index=0;index<products[row].images.length;index++){
    var img=document.createElement("img");
    img.src=products[row].images[index];
    console.log(img);
    childNodes[i].appendChild(img);
    }
  

  }else{childNodes[i].innerHTML = "Categories: "+products[row].categories;}
}

function fillDetailsP(row,i,pCount){
  switch (pCount){
    case 0 :childNodes[i].innerHTML = "Product Name: "+products[row].name;break;
    case 1 :childNodes[i].innerHTML = "Product Description: " +products[row].description;break;
    case 2 :childNodes[i].innerHTML = "Price:"+products[row].price;break;
    case 3 :childNodes[i].innerHTML = "Quantity: "+products[row].quantity;break;
  }
  

}

function emptyProductDetails(){
  console.log("Emptied img container");
  childNodes[13].innerHTML='';
}

function showProductDetails(mouseEvent){
  emptyProductDetails();
  generateDetails(mouseEvent);
}

addRowHandlers();

