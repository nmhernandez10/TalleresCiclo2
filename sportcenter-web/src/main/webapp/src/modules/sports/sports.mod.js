(function (ng) {
    
    var mod = ng.module("sportModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/sports/';
            
            $urlRouterProvider.otherwise("/sportsList");
            
            $stateProvider.state('sportsList', {
                
                url: '/sports/list',
                 views: {
                    'mainView': {
                        templateUrl: basePath + 'sports.list.html',
                        controller: 'sportCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);
