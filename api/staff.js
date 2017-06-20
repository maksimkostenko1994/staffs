/**
 * Created by Maksim on 13.02.2017.
 */
var staffService = require('../staff/services');
var _ = require('lodash');

module.exports = {
    createStaff: createStaff,
    getStaffs: getStaffs,
    updateStaff: updateStaff,
    getStaff: getStaff,
    removeStaff: removeStaff
};

function createStaff(req, res) {
    var params = _.assign({}, req.query, req.body, req.params);
    return staffService.create(params).then(function () {
        if (res.statusCode >= 100 && res.statusCode < 600)
            res.status(res.statusCode);
        else
            res.status(500);
    });
}

function updateStaff(req, res) {
    var staff = _.assign({}, req.query, req.body, req.params);
    return staffService.update(staff).then(function (staff) {
        res.json(staff);
        res.end('Staff has been updated!');
    });
}


function getStaffs(req, res) {
    var queryParams = _.assign({}, req.query, req.body);
    return staffService.query(queryParams).then(function (staff) {
        res.json(staff);
    });
}


function getStaff(req, res) {
    var id = req.params.id;
    return staffService.find(id).then(function (staff) {
        res.json(staff);
    });
}

function removeStaff(req, res) {
    var id = req.params.id;
    return staffService.remove(id).then(function () {
        res.json({});
        res.end('Answer has been removed!');
    });
}