var ProductItem = (function(){

    var itemTemplate =
        '<div class="product-item">' +
            '<div class="product-item-wrapper">' +
                '<a href="product.html#/{{productId}}" class="wishlist"><i class="far fa-star fa-2x"></i></a>' +
                    '<img src="{{image}}">' +
                    '<div>' +
                        '<a class="title" href="product.html#/{{productId}}">{{title}}</a>' +
                        '<span class="price">{{price}}&nbsp;&euro;</span>' +
                        '<a class="button cart"><i class="fa fa-cart-plus"></i><span>Add to cart</span></a>' +
                    '</div>' +
            '</div>' +
        '</div>';

    var ProductItem = function(product){
        this.productId = null;
        this.name = '';
        this.description = '';
        this.quantity = 0;
        this.price = 0;
        this.categories = [];
        this.images = [];
        this.dateCreated = new Date();
        this.dateUpdated = new Date();
        product && this.deserialize(product);
    };

    ProductItem.prototype.deserialize = function(product){
        var self = this;
        this.productId = product._id || null;
        Object.keys(product).forEach(function(param){
            if (self.hasOwnProperty(param)) {
                if ((Array.isArray(self[param]) && Array.isArray(product[param])) || (typeof(self[param]) == typeof(product[param]))) {
                    self[param] = product[param];
                } else if (self[param] instanceof Date) {
                    self[param] = new Date(product[param]);
                }
            }
        });
    };

    /**
     * @returns {HTMLElement}
     */
    ProductItem.prototype.display = function(){
        var tpl = itemTemplate;
        var params = {
            productId: this.productId,
            image: this.images.length && this.images[0] || 'https://placeimg.com/640/480/tech/grayscale',
            title: this.name,
            price: this.price
        };
        Object.keys(params).forEach(function(param){
            tpl = tpl.replace(new RegExp('\{\{' + param + '\}\}', 'g'), params[param]);
        });
        var div = document.createElement('div');
        div.innerHTML = tpl;
        return div.firstElementChild;
    };

    return ProductItem;
})();