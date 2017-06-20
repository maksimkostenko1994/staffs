/**
 * Created by Maksim on 24.02.2017.
 */
angular.module('app').service('UpdateService', ['$resource',
    function ($resource) {
        return $resource('staffs/list/:id', null, {
            update: {
                method: 'PUT'
            }
        });
    }
]);