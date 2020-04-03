export class ProductItemsController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.view.onAddToCart = this.onAddToCart;
    }

    onAddToCart = (productId) => {
        this.model.addToCart(productId, 1);
    }
}