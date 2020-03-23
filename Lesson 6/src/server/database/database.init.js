(function (config) {
    'use strict';

    const logger = require('../logger/logger');
    const database = require('../product/product.store');
    const wishlistDb = require('../wishlist/wishlist.store');
    const fs = require('fs');
    const initDbSource = './src/server/database/init.db.json';
    let Product = require('../product/product.model');
    let Wishlist = require('../wishlist/wishlist.model');

    module.exports = function() {
        return fs.readFile(initDbSource, function (error, data) {
            if (error) {
                process.emit('db:error');
            }

            try {
                let products = JSON.parse(data);

                products.map(function (product) {
                    database.addProduct(
                        new Product(product.name, product.description, product.quantity, product.price, product.categories, product.images),
                        function (newProduct) {
                            // Add some randomly chosen products to the wishlist
                            if (newProduct.quantity > 0 && product.name.length % Math.floor(Math.random() * Math.floor(10) + 1) === 0) {
                                wishlistDb.addToWishlist(new Wishlist(newProduct._id, "1"));
                            }
                        }
                    );
                });

                process.emit('db:initialized');
            } catch (error) {
                logger.debug('Database initialization failed. Error:', error.message);
                process.emit('db:error');
            }
        });
    };
}());