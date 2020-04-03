export class ProductsController {

  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.onAddToCart = this.onAddToCart;
  }

  onAddToCart = (productId) => {
    console.log('handle add to cart: ', productId);
  }
}