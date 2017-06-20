/**
 * Created by Maksim on 24.02.2017.
 */
angular.module('app').controller('UpdateController',
    ['$scope', '$routeParams', '$window','RemoveService', 'UpdateService', 'FindService',
        function ($scope, $routeParams, $window, RemoveService, UpdateService, FindService) {
            $scope.staff = FindService.get({sId: $routeParams.id});

            $scope.updateStaff = function (staff) {
                $scope.submitted = true;
                UpdateService.update({id: $routeParams.id}, staff);
                $window.location.href = '/#!/staffs/list';
            };

            $scope.removeStaff = function (staff) {
                $scope.submitted = true;
                RemoveService.remove({id: staff.id});
                $window.location.href = '/#!/staffs/list';
            };
        }
    ]);