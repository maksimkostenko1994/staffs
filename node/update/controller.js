/**
 * Created by Maksim on 24.02.2017.
 */
angular.module('app').controller('UpdateController',
    ['$scope', '$routeParams', '$window','RemoveService', 'UpdateService', 'FindService',
        function ($scope, $routeParams, $window, RemoveService, UpdateService, FindService) {
            $scope.staff = FindService.get({sId: $routeParams.id});

            var list = new DoublyList();
            var node = $scope.index.id;
            $scope.updateStaff = function (staff) {
                $scope.submitted = true;
                UpdateService.update({id: $routeParams.id}, staff);
                list.update(node(staff));
                $window.location.href = '/#!/staffs/list';
            };

            $scope.removeStaff = function (staff) {
                $scope.submitted = true;
                RemoveService.remove({id: staff.id});
                list.remove(node);
                $window.location.href = '/#!/staffs/list';
            };
        }
    ]);