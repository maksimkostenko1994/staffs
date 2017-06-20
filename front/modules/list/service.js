/**
 * Created by Maksim on 21.02.2017.
 */
angular.module('app')
    .service('ListService', ['$resource',
        function ($resource) {
            return $resource('staffs/list', {}, {
                query: {method: 'GET', isArray: true}
            });
        }
    ]);