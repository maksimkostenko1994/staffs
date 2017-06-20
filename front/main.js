/**
 * Created by Maksim on 13.02.2017.
 */
angular.module('app',['ngRoute', 'ngResource']).config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);