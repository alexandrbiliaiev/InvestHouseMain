angular.module('investHouseMain.controllers').controller('MainController',
    function ($scope, $location, $http, investmentService) {

        investmentService.loadInvestments().then(function (response) {
            $scope.investments = response.data;
        }, function (error) {
            $state.go('error');
        });

        


    })