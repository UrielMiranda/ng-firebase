(function(){
    'use strict';

    angular
        .module('angularfire')
        .run(runApp)
        .config(config);

    config.$inject = ["$routeProvider"];
    function config($routeProvider){
        $routeProvider
            .when('/login',{
                template: '<my-app></my-app>',

            })
            .when('/home',{
                template: '<my-home></my-home>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth){
                        return Auth.$requireSignIn();
                    }]
                }
            })
            .otherwise('/login');
    }

    runApp.$inject = ["$rootScope", "$location"];
    function runApp($rootScope, $location){
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $location.path("/login");
            }else{
                console.log(error);
            }
        });

    }

})();