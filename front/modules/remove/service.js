/**
 * Created by Maksim on 25.02.2017.
 */
angular.module('app').service('RemoveService', ['$resource',
    function ($resource) {
        return $resource('staffs/list/:id', {sId: '@id'}, {
            'delete': {
                method: 'DELETE', isArray: false
            }
        });
    }
]);