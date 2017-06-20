/**
 * Created by Maksim on 19.02.2017.
 */
angular.module('app').controller('CreateController', ['$scope', '$routeParams', '$window', 'CreateService',
    function ($scope, $routeParams, $window, CreateService) {

        $scope.staff = {
            name: '',
            age: '',
            weight: '',
            height: '',
            earn: '',
            address: '',
            passport: '',
            born: '',
            description: '',
            notes: ''
        };

        $scope.save = function (staff) {
            $scope.submitted = true;
            CreateService.save(staff);
            $scope.createPath = '#!/staffs/list';
        };
    }
]);