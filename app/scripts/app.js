(function() {
    
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser == '') {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/usernameModal.html',
                controller: 'UsernameModalCtrl as usernameModal',
                backdrop: 'static'
            });
        }
    }

    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        });
    }
    
     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);
})();