/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since   0.0.1
 *
 * @description
 * This module defines REST-ish HTTP endpoints for
 * manipulating wishlist items in the Ecom Application.
 *
 * @see     wishlist.model.js
 * @see     wishlist.store.js
 */
(function () {
    'use strict';

    const log = require('../logger/logger');

    const apiRoot = '/wishlist';

    const express = require('express');
    let Wishlist = require('./wishlist.model');
    const database = require('./wishlist.store');

    let apiRouter = express.Router();

    let handlers = {
        create: function (request, response) {
            let productId = request.params.productId;
            let userId = request.params.userId || '1';

            if (!productId || !userId) {
                response.status(400).send('Invalid product to save!');
                return;
            }

            database.addToWishlist(
                new Wishlist(productId, userId),
                function (newItem) {
                    response.status(201).json(newItem);
                },
                function (error) {
                    response.status(500).send(error);
                }
            );
        },
        remove: function (request, response) {
            let userId = request.params.userId || '1';
            let productId = request.params.productId;

            if (!userId) {
                response.status(400).send('Invalid user ID!');
                return;
            }

            if (!productId) {
                response.status(400).send('Invalid product ID to remove!');
                return;
            }

            database.removeFromWishlist(
                userId,
                productId,
                function (success) {
                    response.status(201).json(success);
                },
                function (error) {
                    response.status(500).send(error);
                }
            );
        },
        all: function (request, response) {
            let userId = request.params.userId || '1';

            if (!userId) {
                response.status(400).send('Invalid user ID!');
                return;
            }

            database.findAll(userId, function (items) {
                response.status(200).json(items);
            }, function (error) {
                response.status(500).send(error);
            });
        }
    };

    apiRouter.post([ apiRoot + '/product/:productId', apiRoot + '/product/:productId/user/:userId?' ], handlers.create);
    apiRouter.delete([ apiRoot + '/remove/:productId', apiRoot + '/remove/:productId/user/:userId?' ], handlers.remove);
    apiRouter.get([ apiRoot, apiRoot + '/user/:userId?' ], handlers.all);

    log.info('Wishlist API initialized.');

    module.exports = apiRouter;
}());
