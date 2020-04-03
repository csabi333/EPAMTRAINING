/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This module is a wrapper around the xss Node library,
 * providing convenience functions for sanitizing
 * various data types.
 */
(function () {
    'use strict';

    const xss = require('xss');

    let sanitizer = {};

    sanitizer.sanitizeString = function (string) {
        if (typeof string !== 'string') {
            return '';
        }

        return xss(string);
    };

    sanitizer.sanitizeNumber = function (number) {
        if (typeof number !== 'number') {
            number = parseInt(number, 10);
        }

        if (isNaN(number) || number < 0) {
            return 0;
        }

        return number;
    };

    sanitizer.sanitizeInteger = function (number) {
        return Math.floor(sanitizer.sanitizeNumber(number));
    };

    sanitizer.sanitizeArray = function (arr) {
        if (!Array.isArray(arr)) {
            try {
                arr = JSON.parse(arr);

                if (!Array.isArray(arr)) {
                    arr = [];
                }
            } catch (error) {
                arr = [];
            }
        }

        return arr.map(function (item) {
            return sanitizer.sanitizeString(item);
        });
    };

    module.exports = sanitizer;

}());
