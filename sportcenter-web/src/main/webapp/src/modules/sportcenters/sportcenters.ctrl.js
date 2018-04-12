/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (ng) {
    var mod = ng.module("sportcenterModule");
    mod.constant("sportcenterContext", "api/sportcenters");
    mod.controller('sportcenterCtrl', ['$scope', '$http', 'sportcenterContext',
        function ($scope, $http, sportcenterContext) {
            $http.get('data/sportcenters.json').then(function (response) {
                $scope.sportcentersRecords = response.data;
            });
        }
    ]);
}
)(window.angular);


