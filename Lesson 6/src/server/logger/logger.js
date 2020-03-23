/**
 * @author  attilagyongyosi
 * @since   0.0.3
 *
 * @description
 * This module centralizes Winston logging across the
 * server-side.
 */
(function () {
    'use strict';

    const winstonCfg = require('winston-cfg');
    module.exports = winstonCfg.winstonCfg().loggers.get('app');

}());
