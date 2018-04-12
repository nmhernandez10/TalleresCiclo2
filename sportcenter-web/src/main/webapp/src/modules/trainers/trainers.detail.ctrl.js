(function (ng) {
    var mod = ng.module("trainerModule");
    mod.constant("trainerContext", "api/trainers");
    mod.controller('trainerDetailCtrl', ['$scope', '$http', 'trainerContext', '$state', '$filter',
        function ($scope, $http, trainerContext, $state, $filter) {

            if (($state.params.trainerId !== undefined) && ($state.params.trainerId !== null)) {
                $http.get('data/trainers.json').then(function (response) {
                    $scope.trainersRecords = response.data;
                    $scope.currentSport = $filter('filter')($scope.trainersRecords, {id: $state.params.trainerId}, true)[0];
                });
            }
        }
    ]);
}
)(window.angular);