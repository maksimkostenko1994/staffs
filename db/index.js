/**
 * Created by Maksim on 12.02.2017.
 */
var knex = require('knex');
var config = require('../config').database;

module.exports = knex(config);