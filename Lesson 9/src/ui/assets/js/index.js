import { IndexPageController } from "./pages/index.page/index.page.controller.js";
import { IndexPageView } from "./pages/index.page/index.page.view.js";
import { ProductService } from "./services/product.service.js";

const indexPageElement = document.getElementsByClassName('index-page')[0];
const productService = new ProductService();
const indexPageController = new IndexPageController(
    new IndexPageView(indexPageElement, productService),
    productService
);