/**
 * Created by Maksim on 12.02.2017.
 */
var _ = require('lodash');
var db = require('../db');
//var node = require('../node/index');

module.exports = {
    create: create,
    update: update,
    remove: remove,
    find: find,
    findAll: findAll,
    query: query
};

function create(params) {
    var insertParams = _.pick(params,
        ['id', 'name', 'age', 'weight', 'height', 'earn', 'address', 'passport', 'born', 'description', 'notes']);
    return db('staffs').insert(insertParams).returning('id').then(function (array) {
        return +array[0];
    });
}

function update(id, staff) {
    var updateParams = _.pick(staff,
        ['name', 'age', 'weight', 'height', 'earn', 'address', 'passport', 'born', 'description', 'notes']);
    return db('staffs').update(updateParams).where({id: id});
}

function remove(id) {
    return db('staffs').delete().where({id: id});
}

function find(id) {
    return db('staffs').where({id: id}).first();
}

function findAll() {
    return db('staffs');
}

function query(params) {
    var builder = db('staffs');
    builder.select('*');
    if (params.id) {
        builder.where('id', params.id);
    }
    if (params.name) {
        builder.where('name', params.name);
    }
    if (params.age) {
        builder.where('age', params.date);
    }
    if (params.weight) {
        builder.where('weight', params.weight);
    }
    if (params.height) {
        builder.where('height', params.height);
    }
    if (params.earn) {
        builder.where('earn', params.earn);
    }
    if (params.address) {
        builder.where('address', params.address);
    }
    if (params.passport) {
        builder.where('passport', params.passport);
    }
    if (params.born) {
        builder.where('born', params.born);
    }
    if (params.description) {
        builder.where('description', params.text);
    }
    if (params.notes) {
        builder.where('notes', params.text);
    }
    return builder;
}
