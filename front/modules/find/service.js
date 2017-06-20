/**
 * Created by Maksim on 25.02.2017.
 */
angular.module('app').service('FindService', ['$resource',
    function ($resource) {
        return $resource('staffs/list/:sId', {sId: '@id'});
    }
]);