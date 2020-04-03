/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module provides data manipulation operations on Wishlist objects.
 * The underlying store is a persistent NeDB database.
 * Configuration can be found in config/default.js.
 *
 * @see     wishlist.model.js
 * @see     wishlist.api.js
 */
(function () {
    'use strict';

    const log = require('../logger/logger');
    const database = require('../database/database').wishlist;
    const util = require('../util/util');

    let Wishlist = require('./wishlist.model');

    let operations = {};

    operations.addToWishlist = function (item, onSuccess, onError) {
        log.debug('Adding new product to wishlist...');

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
                const errorMessage = 'Product has already been added to the wishlist';

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

                log.debug('Product has been successfully added to the wishList with id %s.', newItem._id);

                if (typeof onSuccess === 'function') {
                    onSuccess(newItem);
                }
            });
        });
    };

    operations.findAll = function (userId, onSuccess, onError) {
        log.debug('Retrieving every item on the wishlist for user %s...', userId);

        database.find({ userId: userId }, function (error, products) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('Found %d products.', products.length);

            if (typeof onSuccess === 'function') {
                onSuccess(products);
            }
        });
    };

    operations.removeFromWishlist = function (userId, productId, onSuccess, onError) {
        log.debug('Remove product %s from the wishlist...', productId);

        database.remove({ userId: userId, productId: productId }, { multi: true }, function (error, numRemoved) {
            if (error) {
                if (typeof onError === 'function') {
                    onError(error);
                }
                return;
            }

            log.debug('%d product has been successfully removed from the wishlist.', numRemoved);

            if (typeof onSuccess === 'function') {
                onSuccess();
            }
        });
    };

    module.exports = operations;
}());