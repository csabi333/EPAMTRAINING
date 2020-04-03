/**
 * @author  attilagyongyosi
 * @since   0.0.3
 *
 * @description
 * Server-side configuration module.
 * The configuration object will be picked up by
 * the 'config' NodeJS library.
 */
(function () {
    'use strict';

    const path = require('path');
    let res = path.resolve;

    const roots = {
        server:     res('src', 'server'),
        ui:         res('src', 'ui'),
        logs:       res('logs')
    };

    const config = {
        paths: roots,

        database: {
            products: {
                inMemoryOnly: true
            },
            wishlist: {
                inMemoryOnly: true
            },
            cart: {
                inMemoryOnly: true
            }
        },

        server: {
            port: 3000
        },

        winston: {
            loggers: [{
                id: 'app',
                level: 'info',
                transports: [{
                    type: 'Console',
                    level: 'debug',
                    colorize: true
                }, {
                    type: 'File',
                    name: 'app-log',
                    filename: res(roots.logs, 'app.log'),
                    maxfiles: 1,
                    maxsize: 1048576,
                    level: 'debug',
                    timestamp: true,
                    json: true,
                }, {
                    type: 'File',
                    name: 'error-log',
                    filename: res(roots.logs, 'errors.log'),
                    maxfiles: 1,
                    maxsize: 1048576,
                    level: 'error',
                    timestamp: true,
                    json: true,
                }]
            }]
        }
    };

    module.exports = config;

}());
