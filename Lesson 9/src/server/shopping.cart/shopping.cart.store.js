/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module provides data manipulation operations on Shopping Cart objects.
 * The underlying store is a persistent NeDB database.
 * Configuration can be found in config/default.js.
 *
 * @see     shopping.cart.model.js
 * @see     shopping.cart.api.js
 */
(function () {
    'use strict';

    const log = require('../logger/logger');
    const database = require('../database/database').cart;
    const util = require('../util/util');

    let ShoppingCart = require('./shopping.cart.model');

    let operations = {};

    operations.addToCart = function (item, onSuccess, onError) {
        log.debug('Adding new product to the shopping cart...');

        if (!item._id) {
            item._id = util.uniqueId();
        }

        // Check whether the product is already on the wishlist
        database.findOne({ productId: item.productId, userId: item.userId }, function (error, product) {
            if (error) {
                log.error(error);

                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            if (!!product) {
                const errorMessage = 'Product has already been added to the cart';

                log.error(errorMessage);

                if (typeof onError === 'function') {
                    onError(errorMessage);
                }
                return;
            }

            database.insert(item, function (error, newItem) {
                if (error) {
                    if (typeof onError === 'function') {
                        onError(error);
                    }
                    return;
                }

                log.debug('Product has been successfully added to the shopping cart with id %s.', newItem._id);

                if (typeof onSuccess === 'function') {
                    onSuccess(newItem);
                }
            });
        });
    };

    operations.findAll = function (userId, onSuccess, onError) {
        log.debug('Retrieving every item in the shopping cart...');

        database.find({ userId: userId }, function (error, items) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('Found %d items.', items.length);

            if (typeof onSuccess === 'function') {
                onSuccess(items);
            }
        });
    };

    operations.removeFromCart = function (userId, productId, onSuccess, onError) {
        log.debug('Remove product %s from the shopping cart...', productId);

        database.remove({ userId: userId, productId: productId }, { multi: true }, function (error, numRemoved) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('%d product has been successfully removed from the shopping cart.', numRemoved);

            if (typeof onSuccess === 'function') {
                onSuccess();
            }
        });
    };

    module.exports = operations;
}());