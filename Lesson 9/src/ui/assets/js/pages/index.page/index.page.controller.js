import { ProductItemsController } from './product.items/product.items.controller.js';
import { ProductItemsView } from './product.items/product.items.view.js';
import { HistoryController } from './history/history.controller.js';
import { HistoryView } from './history/history.view.js';
import { SearchController } from './search/search.controller.js';
import { SearchView } from './search/search.view.js';

export class IndexPageController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.initialize();
    }

    initialize() {
        this.productItemsController = new ProductItemsController(
            new ProductItemsView(this.view.getProductItemsElement(), this.model),
            this.model
        );

        this.historyController = new HistoryController(
            new HistoryView(this.view.getHistoryElement(), this.model),
            this.model
        );

        this.searchController = new SearchController(
            new SearchView(this.view.getSearchElement(), this.model),
            this.model
        );
    }
}