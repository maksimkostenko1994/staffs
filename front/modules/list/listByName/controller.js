/**
 * Created by Maksim on 21.02.2017.
 */
angular.module('app').controller('ListNameController',
    ['$scope', '$filter', '$routeParams', '$window', 'ListService',
        function ($scope, $filter, $routeParams, $window, ListService) {
            $scope.editPath = '#!/staffs/update';
            //var list = new DoublyList();
            $scope.staffs = ListService.query();
            //$scope.staffs = $filter('orderBy')($scope.staffs, ['name', 'age', 'weight', 'height'], $scope.reverse);

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
                if ($scope.currentIndex < $scope.staffs.length - 1) {
                    $scope.currentIndex = ++$scope.currentIndex;
                } else {
                    alert('It is the first data!!');
                    $scope.currentIndex = 0;
                }
                //$scope.currentIndex = ($scope.currentIndex < $scope.staffs.length - 1) ? ++$scope.currentIndex : alert('It is the first data!!');
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
                if ($scope.currentIndex > 0) {
                    $scope.currentIndex = --$scope.currentIndex;
                } else {
                    alert('It is the last data!!');
                    $scope.currentIndex = $scope.staffs.length - 1;
                }
                //$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : alert('It is the last data!!');
            };
        }
    ])
;