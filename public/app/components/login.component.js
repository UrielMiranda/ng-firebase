(function () {
    'use strict';
    let config = {
        apiKey: "AIzaSyA2J9hqXPrYCcGOugUfHAAV1UFqSyk5Ckw",
        authDomain: "ngfirebase-4c03b.firebaseapp.com",
        databaseURL: "https://ngfirebase-4c03b.firebaseio.com",
        storageBucket: "ngfirebase-4c03b.appspot.com",
        messagingSenderId: "851318347116"
    };
    firebase.initializeApp(config);

    let myApp = {
        templateUrl: "./app/components/login.html",
        controller: ngCtrl
    };

    angular
        .module('angularfire')
        .component("myApp", myApp);

    ngCtrl.$inject = ['$firebaseAuth'];
    function ngCtrl($firebaseAuth){
        let ng = this;
        ng.auth = $firebaseAuth();
        ng.login = login;
        ng.loginUser = loginUser;
        ng.createUser = createUser;
        ng.email = null;
        ng.pass =  null;


        function login(socialred){
            ng.auth.$signInWithPopup(socialred).then(function(firebaseUser) {
                    window.location.replace('/#/home');
                    console.log("Signed in as:", firebaseUser.user.displayName);
                }).catch(function(error) {
                    console.log("Authentication failed:", error);
                });
        }

        function createUser(email,password) {
            console.log(email,password);
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function(firebaseUser){
                window.location.replace('/#/home');
                console.log("Signed in as:", firebaseUser.email);
            })
                .catch(function(error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;});
        }

        function loginUser(email,password) {
            console.log(email,password);
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function(firebaseUser){
                window.location.replace('/#/home');
                console.log("Signed in as:", firebaseUser.email);
            }).catch(function(error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;});
        }



    }

})();