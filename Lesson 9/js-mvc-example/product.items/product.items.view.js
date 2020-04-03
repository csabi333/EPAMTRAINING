export class ProductsView {

  constructor(element, model) {
    this.element = element;
    this.model = model;
    this.model.onSearch.attach(this.onSearchListener.bind(this));
    this.renderProducts(this.model.getAllProducts());
    this.onAddToCart = null;
  }

  onSearchListener(products) {
    console.log(products);
    this.renderProducts(products);
  }

  renderProducts(products) {
    this.element.innerHTML = '';
    products.forEach((product) => {
      const productElement = this.getProductTemplate(product);
      this.element.appendChild(productElement);
      this.addEventListener(productElement, 'a.cart', 'click', this.addToCart);
    });
  }

  addToCart = (event) => {
    this.onAddToCart(event.target.attributes.productId.value);
  }

  addEventListener(element, selector, eventType, eventListenerFn) {
    const el = element.querySelector(selector);
    el.addEventListener(eventType, eventListenerFn);
  }

  removeEventListener(element, selector, eventType, eventListenerFn) {
    const el = element.querySelector(selector);
    el.removeEventListener(eventType, eventListenerFn);
  }

  getProductTemplate(productItem) {
    let element = document.createElement('div');
    element.innerHTML = `
      <div class="product-item">
        <div class="product-item-wrapper">
            <a href="product.html#/${ productItem.productId }" class="wishlist"><i class="far fa-star fa-2x"></i></a>
            <img src="${ productItem.images[0] }">
            <div>
                <a class="title" href="product.html#/${ productItem.productId }">${ productItem.name }</a>
                <span class="price">${ productItem.price }&nbsp;&euro;</span>
                <a class="button cart" productId="${ productItem.productId }"><i class="fa fa-cart-plus"></i><span>Add to cart</span></a>
            </div>
        </div>
      </div>`;
    return element.firstElementChild;
  }
}