// Import stylesheets
import './style.css';

import { ProductsController } from './product.items/product.items.controller.js';
import { ProductsView } from './product.items/product.items.view.js';
import { ProductsModel } from './product.items/product.items.model.js';

window.productsModel = new ProductsModel();
window.productsCtrl = new ProductsController(new ProductsView(document.getElementsByClassName('product-items')[0], productsModel), productsModel);