export class IndexPageView {
    constructor(element, model) {
        this.element = element;
        this.model = model;
        this.initialize();
    }

    getProductItemsElement() {
        return this.element.getElementsByClassName('product-items')[0];
    }

    getHistoryElement() {
        return this.element.getElementsByClassName('history')[0];
    }

    getSearchElement() {
        return this.element.getElementsByClassName('search')[0];
    }

    initialize() {
        this.element.innerHTML = `
            <nav>
                <div class="search"></div>
                <div class="filters"></div>
                <div class="history"></div>
            </nav>
            <div class="result">
                <div class="order-result">
                    <a href="" name="price" class="item"><i class="fa fa-sort-numeric-up"></i>Cheapest first</a>
                    <a href="" name="name" class="item"><i class="fa fa-sort-alpha-up"></i>Alphabetical order</a>
                </div>
                <section class="product-items"></section>
            </div>
        `
    }
}