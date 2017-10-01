var app = angular.module('investHouseMain', ['ngRoute', 'investHouseMain.services',
    'investHouseMain.controllers', 'ngSanitize'])
    .config(function($routeProvider) {})
    .run(function($rootScope) {

        $rootScope.prod = false;
        if ($rootScope.prod) {
            $rootScope.apiLink = "http://bielka-002-site1.ctempurl.com/"
        } else {
            $rootScope.apiLink = "http://localhost:63031/";
        }
    });

// use the HTML5 History API

angular.module('investHouseMain.services', []);
angular.module('investHouseMain.controllers', []);




