/**
 * Created by Maksim on 19.02.2017.
 */
angular.module('app').service('CreateService', ['$resource',
    function ($resource) {
        return $resource('staffs/create', {}, {
            save: {method: 'POST', isArray: true}
        });
    }
]);