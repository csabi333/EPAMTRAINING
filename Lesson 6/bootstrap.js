/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module is the entry point of the Ecom app server.
 */
(function (config) {
    'use strict';

    const logger = require('./src/server/logger/logger');

    const express = require('express');
    const bodyParser = require('body-parser');
    const productApi = require('./src/server/product/product.api');
    const wishlistApi = require('./src/server/wishlist/wishlist.api');
    const shoppingCartApi = require('./src/server/shopping.cart/shopping.cart.api');
    const initDb = require('./src/server/database/database.init');

    const port = config.get('server.port');

    let app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(config.get('paths.ui')));

    app.use('/api', productApi);
    app.use('/api', wishlistApi);
    app.use('/api', shoppingCartApi);

    process.on('db:connected', function () {
        initDb();
    });

    process.on('db:initialized', function () {
        app.listen(port, function () {
            logger.info('Server started on port %d successfully.', port);
        });
    });

    process.on('db:error', function () {
        if (typeof app.close === 'function') {
            app.close();
        }
    });

}(require('config')));
