import { Event } from '../utils/event.js';
import { ProductItem } from './product.item.js';
import { ProductSearchParams } from './product.search.params.js';

export class ProductService {

    constructor() {
        this.onSearch = new Event();
    }

    getAllProducts() {
        return this.search(new ProductSearchParams({}));
    }

    /**
     *
     * @param {ProductSearchParams} params
     */
    search(params) {
        let uri = '/api/products';
        if (params.category) {
            uri += `/category/${ params.category }`;
        }

        return fetch(uri + this.buildUriParams(params), {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                return response.json()
                    .then((products) => {
                        return products.map((product) => {
                            return new ProductItem(product);
                        });
                });
            }

            return Promise.resolve([]);
        }).then((products) => {
            this.onSearch.notify(products);

            return products;
        })
    }

    addToCart(productId, quantity) {
        let uri = `/api/cart/product/${ productId }/quantity/${ quantity }`;

        return fetch(uri, {
            method: 'POST'
        }).then((response) => {
            if (response.ok) {
                // Send an Event notification that a new item is added to the cart
            }
        });
    }

    /**
     * @todo: Homework - load a specific product
     * Requested URI: /api/products/{productId}
     *
     * @param {string} productId
     * @returns {Promise<ProductItem>}
     */
    getProduct(productId) {
        return Promise.resolve(null);
    }

    buildUriParams(searchParams) {
        var query = [];
        var params = searchParams.toJSON();
        Object.keys(params).forEach(function(param){
            if (params[param]) {
                query.push(param+'='+encodeURIComponent(params[param]));
            }
        });
        return (query.length && '?' + query.join('&')) || '';
    }
}