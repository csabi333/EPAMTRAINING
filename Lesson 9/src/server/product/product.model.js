/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module exposes a Product prototype.
 *
 * @see product.store.js
 * @see product.api.js
 */
(function () {
    'use strict';

    const sanitizer = require('../sanitizer/sanitizer');
    const util = require('../util/util');

    function sanitizeProduct(product) {
        return {
            _id: product.id,
            name: sanitizer.sanitizeString(product.name),
            description: sanitizer.sanitizeString(product.description),
            quantity: sanitizer.sanitizeInteger(product.quantity),
            price: sanitizer.sanitizeNumber(product.price),
            categories: sanitizer.sanitizeArray(product.categories),
            images: sanitizer.sanitizeArray(product.images),
            dateCreated: product.dateCreated,
            dateUpdated: product.dateUpdated
        };
    }

    function sanitizeProducts(products) {
        if (!products) {
            return [];
        }

        return products.map(function (product) {
            return sanitizeProduct(product);
        });
    }

    module.exports = function (name, description, quantity, price, categories, images, dateCreated, dateUpdated) {
        this.name = sanitizer.sanitizeString(name);
        this.description = sanitizer.sanitizeString(description);
        this.quantity = sanitizer.sanitizeInteger(quantity);
        this.price = sanitizer.sanitizeNumber(price);
        this.categories = util.uniqueArray(sanitizer.sanitizeArray(categories));
        this.images = sanitizer.sanitizeArray(images);
        this.dateCreated = dateCreated || new Date();
        this.dateUpdated = dateUpdated || new Date();
    };
}());