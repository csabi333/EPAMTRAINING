/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module exposes a Shopping Carg prototype.
 *
 * @see shopping.cart.store.js
 * @see shopping.cart.api.js
 */
(function () {
    'use strict';
    const log = require('../logger/logger');
    const sanitizer = require('../sanitizer/sanitizer');

    module.exports = function (productId, userId, quantity, dateCreated) {
        this.productId = sanitizer.sanitizeString(productId);
        this.userId = sanitizer.sanitizeString(userId);
        this.quantity = sanitizer.sanitizeInteger(quantity);
        this.dateCreated = dateCreated || new Date();
    };
}());