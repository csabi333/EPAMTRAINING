import { ProductSearchParams } from '../../../services/product.search.params.js';

export class SearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.view.onSubmitEventListener = (searchTerm) => {
            this.model.search(new ProductSearchParams({ searchTerm }));
        }
    }
}