    // create the module and name it scotchApp
    var app = angular.module('dcApp', ['ngRoute', 'ngAnimate', 'route-segment', 'view-segment', 'ngMaterial']);

    // app.factory('service', function($http){
    //     var service = {
    //         async: function() {
    //                 var promise = $http({
    //                     url:"app.php", 
    //                     method: 'POST',
    //                     data: {methods: 'info'}
    //                 }).then(function (response) {
    //                 return response.data;
    //             });
    //             return promise;
    //         },
    //         general:function(typeservices){
    //                 var promise = $http.post("app.php", {methods: typeservices}).then(function (response) {
    //                 return response.data;
    //             });
    //             return promise;
    //         },
    //         general:function(typeservices, url, data){
    //                 var promise = $http.post(url, {methods: typeservices, data}).then(function (response) {
    //                 return response.data;
    //             });
    //             return promise;
    //         }
    //     };
    //     return service;
    // });

    // // configure our routes
    

    app.controller('homeCtrl', function($scope, $rootScope, $localStorage){
       $scope.x = 6
    });

     app.controller('hofmeCtrl', function($scope, $rootScope, $localStorage){
       
    });

