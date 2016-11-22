/**
 * Created by urielmiranda on 22/11/16.
 */
(function(){
    'use strict';

    angular
        .module('angularfire')
        .factory("Auth", Auth);


    Auth.$inject = ["$firebaseAuth"];
    function Auth($firebaseAuth){
        return $firebaseAuth();
    }
})();