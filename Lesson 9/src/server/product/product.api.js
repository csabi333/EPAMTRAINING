/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since   0.0.1
 *
 * @description
 * This module defines REST-ish HTTP endpoints for
 * manipulating products in the Ecom Application.
 *
 * @see     product.model.js
 * @see     product.store.js
 */
(function () {
    'use strict';

    const log = require('../logger/logger');

    const apiRoot = '/products';

    const express = require('express');
    let Product = require('./product.model');
    const database = require('./product.store');

    let apiRouter = express.Router();

    let handlers = {
        create: function (request, response) {
            let product = request.body;

            if (!product) {
                response.status(400).send('Invalid product to save!');
                return;
            }

            if (!product.name) {
                response.status(400).send('Product name could not be empty!');
                return;
            }

            if (!product.description) {
                response.status(400).send('Product description could not be empty!');
                return;
            }

            database.addProduct(
                new Product(product.name, product.description, product.quantity, product.price, product.categories, product.images),
                function (newProduct) {
                    response.status(201).json(newProduct);
                },
                function (error) {
                    response.status(500).send(error);
                }
            );
        },
        update: function (request, response) {
            let id = request.params.id;

            if (id === undefined) {
                response.status(400).send('Invalid product ID to update!');
                return;
            }

            database.updateProduct(
                id,
                function (success) {
                    response.status(201).json(success);
                },
                function (error) {
                    response.status(500).send(error);
                }
            );
        },
        all: function (request, response) {
            let searchTerm = request.query.searchTerm;
            let userId = request.query.userId || '1';
            let sortBy = request.query.sortBy;
            let sortDirection = request.query.sortDirection;

            if (searchTerm) {
                database.findBySearchTerm(searchTerm, userId, sortBy, sortDirection, function (products) {
                    response.status(200).json(products);
                }, function (error) {
                    response.status(500).send(error);
                });
            } else {
                database.findAll(userId, sortBy, sortDirection, function (products) {
                    response.status(200).json(products);
                }, function (error) {
                    response.status(500).send(error);
                });
            }
        },
        one: function (request, response) {
            let id = request.params.id;
            let userId = request.query.userId || '1';

            if (id === undefined) {
                response.status(400).send('Wrong ID parameter!');
                return;
            }

            database.findById(id, userId, function (product) {
                response.status(200).json(product);
            }, function (error) {
                response.status(500).send(error);
            });
        },
        category: function (request, response) {
            let category = request.params.category;
            let userId = request.query.userId || '1';
            let sortBy = request.query.sortBy;
            let sortDirection = request.query.sortDirection;

            if (!category) {
                response.status(400).send('Wrong category parameter!');
                return;
            }

            database.findByCategory(category, userId, sortBy, sortDirection, function (products) {
                response.status(200).json(products);
            }, function (error) {
                response.status(500).send(error);
            });
        },
        categories: function (request, response) {
            database.listCategories(function (categories) {
                response.status(200).json(categories);
            }, function (error) {
                response.status(500).send(error);
            });
        },
        recentlyViewed: function (request, response) {
            let searchTerm = request.query.searchTerm;

            database.findLastUpdated(function (products) {
                response.status(200).json(products);
            }, function (error) {
                response.status(500).send(error);
            });
        }
    };

    apiRouter.get(apiRoot + '/category/:category?', handlers.category);
    apiRouter.get(apiRoot + '/categories', handlers.categories);
    apiRouter.get(apiRoot + '/recently-viewed', handlers.recentlyViewed);
    apiRouter.post(apiRoot, handlers.create);
    apiRouter.post(apiRoot + '/:id', handlers.update);
    apiRouter.get(apiRoot, handlers.all);
    apiRouter.get(apiRoot + '/:id', handlers.one);

    log.info('Products API initialized.');

    module.exports = apiRouter;
}());
