/**
 * Created by Maksim on 12.02.2017.
 */
var staffDal = require('./dal');

module.exports = {
    create: create,
    update: update,
    remove: remove,
    find: find,
    findAll: findAll,
    query: query
};

function create(params) {
    return staffDal.create(params);
}

function update(params) {
    return staffDal.update(params.id, params);
}

function remove(id) {
    return staffDal.remove(id);
}

function find(id) {
    return staffDal.find(id);
}

function findAll() {
    return staffDal.findAll();
}

function query(params) {
    var queryParams = [{
        id: params.id,
        name: params.name,
        age: params.age,
        weight: params.weight,
        height: params.height,
        earn: params.earn,
        address: params.address,
        passport: params.passport,
        born: params.born,
        description: params.description,
        notes: params.notes
    }];
    return staffDal.query(queryParams);
}