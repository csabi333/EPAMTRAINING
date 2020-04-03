export class ProductItem {

    constructor(product) {
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
    }

    deserialize(product) {
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
        //this one is only needed because of the unique working method of placeimg site
        this.images = this.images.map(function(img){
            return img + '/' + Math.floor(Math.random() * 5);
        });
    };
}