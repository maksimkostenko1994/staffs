/**
 * Created by Maksim on 14.02.2017.
 */
angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/staffs/create', {templateUrl: '/app/modules/create/template.html', controller: 'CreateController'})
        .when('/staffs/update/:id', {templateUrl: '/app/modules/update/update.html', controller: 'UpdateController'})
        .when('/staffs/list/name', {templateUrl: '/app/modules/list/listByName/list.html', controller: 'ListNameController'})
        .when('/staffs/list/age', {templateUrl: '/app/modules/list/listByAge/list.html', controller: 'ListAgeController'})
        .when('/staffs/list/weight', {templateUrl: '/app/modules/list/listByWeight/list.html', controller: 'ListWeightController'})
        .when('/staffs/list/height', {templateUrl: '/app/modules/list/listByHeight/list.html', controller: 'ListHeightController'});
    $locationProvider.html5Mode({enable: true, requireBase: false}).hashPrefix('!');
    window.location = '#!/staffs/list/name';
}]);