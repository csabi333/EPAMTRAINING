import './style.css';
const products = require('./products.json');
console.log(products[0]);

let table = document.querySelector("table");
let data =Object.keys(products[0]);

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