/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module exposes a Wishlist prototype.
 *
 * @see wishlist.store.js
 * @see wishlist.api.js
 */
(function () {
    'use strict';

    const sanitizer = require('../sanitizer/sanitizer');

    module.exports = function (productId, userId, dateCreated) {
        this.productId = sanitizer.sanitizeString(productId);
        this.userId = sanitizer.sanitizeString(userId);
        this.dateCreated = dateCreated || new Date();
    };
}());