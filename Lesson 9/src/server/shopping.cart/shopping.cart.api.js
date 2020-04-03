/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since   0.0.1
 *
 * @description
 * This module defines REST-ish HTTP endpoints for
 * manipulating shoopping cart items in the Ecom Application.
 *
 * @see     shopping.cart.model.js
 * @see     shopping.cart.store.js
 */
(function () {
    'use strict';

    const log = require('../logger/logger');

    const apiRoot = '/cart';

    const express = require('express');
    let ShoppingCart = require('./shopping.cart.model');
    const database = require('./shopping.cart.store');

    let apiRouter = express.Router();

    let handlers = {
        create: function (request, response) {
            let productId = request.params.productId;
            let userId = request.params.userId || '1';
            let quantity = parseInt(request.params.quantity, 10);

            if (!productId || !userId) {
                response.status(400).send('Invalid product to save!');
                return;
            }

            if (isNaN(quantity) || quantity < 1) {
                response.status(400).send('Quantity must be a positive integer.');
                return;
            }

            database.addToCart(
                new ShoppingCart(productId, userId, quantity),
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

            database.removeFromCart(
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

    apiRouter.post([ apiRoot + '/product/:productId/quantity/:quantity', apiRoot + '/product/:productId/quantity/:quantity/user/:userId?' ], handlers.create);
    apiRouter.delete([ apiRoot + '/remove/:productId', apiRoot + '/remove/:productId/user/:userId?' ], handlers.remove);
    apiRouter.get([ apiRoot, apiRoot + '/user/:userId?' ], handlers.all);

    log.info('Shopping Cart API initialized.');

    module.exports = apiRouter;
}());
