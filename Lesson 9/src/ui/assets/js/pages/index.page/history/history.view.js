export class HistoryView {

    constructor(element, model) {
        this.element = element;
        this.model = model;

        this.initialize();
    }

    initialize() {
        this.element.innerHTML = `
            <div class="history">
                <h3>RECENTLY VIEWED</h3>
                <ul>
                    <li>
                        <div class="product-item">
                            <div class="product-item-wrapper">
                                <a href="#" class="wishlist"><i class="far fa-star fa-2x"></i></a>
                                <img src="https://placeimg.com/100/100/tech/grayscale">
                                <div>
                                    <a class="title" href="product.html">Some title here</a>
                                    <span class="price">9.99 &euro;</span>
                                    <a class="button cart"><i class="fa fa-cart-plus"></i><span><span>Add to cart</span></span></a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product-item">
                            <div class="product-item-wrapper">
                                <a href="#" class="wishlist"><i class="far fa-star fa-2x"></i></a>
                                <img src="https://placeimg.com/100/100/tech/sepia">
                                <div>
                                    <a class="title" href="#">Some very loooooooooooong title here</a>
                                    <span class="price">9.99 &euro;</span>
                                    <a class="button cart"><i class="fa fa-cart-plus"></i><span><span>Add to cart</span></span></a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product-item">
                            <div class="product-item-wrapper">
                                <a href="#" class="wishlist"><i class="far fa-star fa-2x"></i></a>
                                <img src="https://placeimg.com/100/100/tech">
                                <div>
                                    <a class="title" href="product.html">Some title here</a>
                                    <span class="price">9.99 &euro;</span>
                                    <a class="button cart"><i class="fa fa-cart-plus"></i><span><span>Add to cart</span></span></a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
        `;
    }
}