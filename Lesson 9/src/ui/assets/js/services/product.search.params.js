export class ProductSearchParams {

    constructor(params) {
        this.searchTerm = '';
        this.userId = null;
        this.category = null;
        this.sortBy = 'name';
        this.sortDirection = 'asc';
        this._eventListeners = {
            'change': []
        };
        params && this.deserialize(params);
    }

    deserialize(params) {
        if (params) {
            this.searchTerm = params.searchTerm || '';
            this.userId = params.userId && parseInt(params.userId) || null;
            params.sortBy && this.setSortBy(params.sortBy);
            params.sortDirection && this.setDirection(params.sortDirection);
        }
    };

    setSortBy(sort) {
        var accept = ['name','date','price'];
        var oldValue = this.sortBy;
        this.sortBy = accept[0];
        if (sort && accept.indexOf(sort.toLowerCase()) > -1) {
            this.sortBy = sort.toLowerCase();
        }
        oldValue && oldValue !== this.sortBy && this.dispatchEvent('change', this);
    };

    setDirection(direction) {
        var accept = ['asc','desc'];
        var oldValue = this.sortDirection;
        this.sortDirection = accept[0];
        if (direction && accept.indexOf(direction.toLowerCase()) > -1) {
            this.sortDirection = direction.toLowerCase();
        }
        oldValue && oldValue !== this.sortDirection && this.dispatchEvent('change', this);
    };

    setSearchTerm(searchTerm) {
        var oldTerm = this.searchTerm;
        this.searchTerm = searchTerm;
        this.category = '';
        oldTerm !== searchTerm && this.dispatchEvent('change', this);
    };

    setCategory(category) {
        if (category) {
            var oldCategory = this.category;
            this.searchTerm = '';
            this.category = category;
            oldCategory !== category && this.dispatchEvent('change', this);
        }
    };

    on(event, handler) {
        if (this._eventListeners.hasOwnProperty(event)) {
            this._eventListeners[event].push(handler);
        }
    };

    off(event, handler) {
        if (this._eventListeners.hasOwnProperty(event)) {
            if (handler) {
                var index = this._eventListeners[event].indexOf(handler);
                if (index > -1) {
                    this._eventListeners[event].splice(index, 1);
                }
            } else {
                this._eventListeners[event].length = null;
            }
        }
    };

    dispatchEvent(event) {
        if (this._eventListeners.hasOwnProperty(event)) {
            var params = [];
            for (var i=1; i<arguments.length; i++) {
                params.push(arguments[i]);
            }
            this._eventListeners[event].forEach(function(handler){
                handler.apply(null, params);
            });
        }
    };

    toJSON() {
        this.setSortBy(this.sortBy);
        this.setDirection(this.sortDirection);
        return {
            searchTerm: this.searchTerm,
            userId: this.userId,
            sortBy: this.sortBy,
            sortDirection: this.sortDirection
        };
    };

}