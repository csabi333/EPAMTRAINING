/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module contains utility methods for working with different data types.
 */
(function () {
    'use strict';

    const uuidv1 = require('uuid/v1');

    let util = {};

    util.uniqueArray = function (arr) {
        if (!Array.isArray(arr)) {
            return [];
        }

        return arr.filter(function(element, index, array) {
            return array.indexOf(element) === index;
        });
    };

    util.uniqueId = function () {
        return uuidv1();
    };

    module.exports = util;
}());
