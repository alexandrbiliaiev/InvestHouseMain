angular.module('investHouseMain.controllers').controller('MainController',
    function($scope, $location, $http, investmentService, generalSettingsService, newsService, contentService, $sanitize) {

        investmentService.loadInvestments().then(function(response) {
            $scope.investments = response.data;
        }, function(error) {
            $state.go('error');
        });

        generalSettingsService.loadInformation().then(function(response) {
            $scope.settings = response.data;
        }, function(error) {
            $state.go('error');
        });

        newsService.loadLastNews().then(function(response) {
            $scope.lastNews = response.data;
        }, function(error) {
            $state.go('error');
        });

        newsService.loadAllNews().then(function(response) {
            $scope.allNews = response.data;
        }, function(error) {
            $state.go('error');
        });

        contentService.loadAboutUs().then(function(response) {
            $scope.aboutUs = response.data;
        }, function(error) {
            $state.go('error');
        });



    })