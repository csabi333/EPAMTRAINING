/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module provides data manipulation operations
 * on Product objects.
 * The underlying store is a persistent NeDB database.
 * Configuration can be found in config/default.js.
 *
 * @see     product.model.js
 * @see     product.api.js
 */
(function () {
    'use strict';

    const log = require('../logger/logger');
    const database = require('../database/database').products;
    const wishlistDb = require('../wishlist/wishlist.store');
    const shoppingCartDb = require('../shopping.cart/shopping.cart.store');
    const util = require('../util/util');

    const SORT_BY_NAME = 'name';
    const SORT_BY_PRICE = 'price';
    const SORT_BY_DATE = 'date';
    const SORT_DIRECTION_ASC = 'asc';
    const SORT_DIRECTION_DESC = 'desc';

    let Product = require('./product.model');

    let processProducts = function (products, userId, onSuccess, onError) {
        let singleProduct = !products.length;
        let productList = singleProduct ? [ products ] : products;

        if (!userId) {
            if (!products) {
                if (typeof onError === 'function') {
                    onError(error);
                }

                return;
            }

            if (typeof onSuccess === 'function') {
                onSuccess(singleProduct ? productList[0] : productList);
            }

            return;
        }

        // Set 'wishlisted' status for each product
        wishlistDb.findAll(userId, function (items) {
             productList.forEach(function (product) {
                let wishlistedProduct = items.find(function (item) {
                    return item.productId === product._id;
                });

                product.wishlisted = !!wishlistedProduct;
            });

            // Set 'inCart' status for each product
            shoppingCartDb.findAll(userId, function (items) {
                productList.forEach(function (product) {
                    let inCartProduct = items.find(function (item) {
                        return item.productId === product._id;
                    });

                    product.inCart = !!inCartProduct;
                });

                if (typeof onSuccess === 'function') {
                    onSuccess(singleProduct ? productList[0] : productList);
                }
            }, function (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
            });
        }, function (error) {
            if (typeof onError === 'function') {
                onError(error);
            }
        });
    };

    let getSortingParams = function (sortBy, sortDirection) {
        let params = {};

        let field;
        let direction = sortDirection === SORT_DIRECTION_DESC ? -1 : 1;

        switch(sortBy) {
            case SORT_BY_PRICE:
                field = 'price';
                break;
            case SORT_BY_DATE:
                field = 'dateUpdated';
                break;
            default:
                field = 'name';
        }

        params[field] = direction;

        log.debug('Sorting params: %s', JSON.stringify(params));

        return params;
    };

    let operations = {};

    operations.addProduct = function (product, onSuccess, onError) {
        log.debug('Adding new product...');

        if (!product._id) {
            product._id = util.uniqueId();
        }

        database.insert(product, function (error, newProduct) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('New product has been successfully saved with id %s.', newProduct._id);

            if (typeof onSuccess === 'function') {
                onSuccess(newProduct);
            }
        });
    };

    operations.findAll = function (userId, sortBy, sortDirection, onSuccess, onError) {
        log.debug('Retrieving every product...');

        database.find({}).sort(getSortingParams(sortBy, sortDirection)).exec(function (error, products) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('Found %d products.', products.length);

            processProducts(products, userId, onSuccess, onError);
        });
    };

    operations.findById = function (id, userId, onSuccess, onError) {
        log.debug('Getting product by ID "%s"...', id);

        if (!id) {
            log.debug('Invalid product id: %s', id);
            if (typeof onError === 'function') {
                onError('Invalid product id: %s', id);
            }
            return;
        }

        database.findOne({ _id: id }, function (error, product) {
            if (error || !product) {
                if (typeof onError === 'function') {
                    onError(error || 'Product not found.');
                }
                return;
            }

            processProducts(product, userId, onSuccess, onError);
        });
    };

    operations.findBySearchTerm = function (searchTerm, userId, sortBy, sortDirection, onSuccess, onError) {
        log.debug('Finding products by searchTerm "%s" in the name or description...', searchTerm);

        const query = { $or: [ { name: new RegExp(searchTerm, 'gi') }, { description: new RegExp(searchTerm, 'g') } ] };

        database.find(query).sort(getSortingParams(sortBy, sortDirection)).exec(function (error, products) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('Found %d products matching the search term in their name or description.', products.length);

            processProducts(products, userId, onSuccess, onError);
        });
    };

    operations.findByCategory = function (category, userId, sortBy, sortDirection, onSuccess, onError) {
        log.debug('Finding products by category "%s"...', category);

        if (!category) {
            log.debug('Invalid category: "%s"', category);
            if (typeof onError === 'function') {
                onError(error);
            }
            return;
        }

        database.find({ categories: category }).sort(getSortingParams(sortBy, sortDirection)).exec(function (error, products) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('Found %d products matching the category "%s".', products.length, category);

            processProducts(products, userId, onSuccess, onError);
        });
    };

    operations.findLastUpdated = function (onSuccess, onError) {
        log.debug('Finding last updated products...');

        database.find({}).sort({ dateUpdated: -1 }).limit(10).exec(function (error, products) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('Found %d products ordered by updated date.', products.length);

            if (typeof onSuccess === 'function') {
                onSuccess(products);
            }
        });
    };

    operations.updateProduct = function (id, onSuccess, onError) {
        log.debug('Update product by id %s...', id);

        database.update({ _id: id }, { $set: { dateUpdated: new Date() } }, {}, function (error, numReplaced) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('Product date has been updated.', numReplaced);

            if (typeof onSuccess === 'function') {
                onSuccess();
            }
        });
    };

    operations.listCategories = function (onSuccess, onError) {
        log.debug('Retrieving all available categories...');

        database.find({}, { categories: 1, _id: 0 }, function (error, products) {
            if (error) {
                log.debug(error);
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            let categories = [];

            if (products.length) {
                products.forEach(function (product) {
                    if (product.categories.length) {
                        categories.push(...product.categories);
                    }
                });

                categories = util.uniqueArray(categories);
                categories.sort();
            }

            log.debug('Found %d categories.', categories.length);

            if (typeof onSuccess === 'function') {
                onSuccess(categories);
            }
        });
    };

    module.exports = operations;
}());