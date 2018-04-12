/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (ng) {
    
    var mod = ng.module("sportcenterModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/sportcenters/';
            
            $urlRouterProvider.otherwise("/sportcentersList");
            
            $stateProvider.state('sportcentersList', {
                
                url: '/sportcenters/list',
                 views: {
                    'mainView': {
                        templateUrl: basePath + 'sportcenters.list.html',
                        controller: 'sportcenterCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);

