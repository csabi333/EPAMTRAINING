/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module initializes a NeDB database for products, wishlist and other user information.
 * When database initialization fails, it will emit an event which will
 * stop the NodeJS server.
 *
 * @see     product.store.js
 * @see     wishlist.store.js
 */
(function (config) {
    'use strict';

    const log   = require('../logger/logger');
    const DataStore = require('nedb');

    let dbConfig = config.get('database');

    dbConfig.products.onload = function (error) {
        if (error) {
            log.error('Could not load products database, stopping application!', error);
            process.emit('db:error');
        } else {
            log.info('Products database has been initialized successfully.');
            process.emit('db:connected');
        }
    };

    dbConfig.wishlist.onload = function (error) {
        if (error) {
            log.error('Could not load wishlist database, stopping application!', error);
            process.emit('db:error');
        } else {
            log.info('Wishlist database has been initialized successfully.');
        }
    };

    dbConfig.cart.onload = function (error) {
        if (error) {
            log.error('Could not load shopping cart database, stopping application!', error);
            process.emit('db:error');
        } else {
            log.info('Shopping cart database has been initialized successfully.');
        }
    };

    let dataStores = {
        products: new DataStore(dbConfig.products),
        wishlist: new DataStore(dbConfig.wishlist),
        cart: new DataStore(dbConfig.cart)
    };

    dataStores.products.loadDatabase(dbConfig.products.onload);
    dataStores.wishlist.loadDatabase(dbConfig.wishlist.onload);
    dataStores.cart.loadDatabase(dbConfig.cart.onload);

    module.exports = dataStores;
}(require('config')));
