/**
 * Created by Maksim on 21.02.2017.
 */
angular.module('app').controller('ListAgeController',
    ['$scope', '$filter', '$routeParams', '$window', 'ListService',
        function ($scope, $filter, $routeParams, $window, ListService) {
            $scope.editPath = '#!/staffs/update';
            //var list = new DoublyList();
            $scope.staffs = ListService.query();

            //list.add(new Node($scope.staffs));

            $scope.currentIndex = 0;

            $scope.setCurrentSlideIndex = function (index) {
                $scope.currentIndex = index;
            };
            $scope.isCurrentSlideIndex = function (index) {
                return $scope.currentIndex === index;
            };

            $scope.prevSlide = function (order) {
                if (order === 'name') {
                    $window.location.href = '#!/staffs/list/name';
                }
                if (order === 'age') {
                    $window.location.href = '#!/staffs/list/age';
                }
                if (order === 'width') {
                    $window.location.href = '#!/staffs/list/weight';
                }
                if (order === 'height') {
                    $window.location.href = '#!/staffs/list/height';
                }
                $scope.currentIndex = ($scope.currentIndex < $scope.staffs.length - 1) ? ++$scope.currentIndex : 0;
            };

            $scope.nextSlide = function (order) {
                if (order === 'name') {
                    $window.location.href = '#!/staffs/list/name';
                }
                if (order === 'age') {

                    $window.location.href = '#!/staffs/list/age';
                }
                if (order === 'width') {
                    $window.location.href = '#!/staffs/list/weight';
                }
                if (order === 'height') {
                    $window.location.href = '#!/staffs/list/height';
                }
                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.staffs.length - 1;
            };
        }
    ])
;