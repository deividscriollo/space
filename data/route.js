    // create the module and name it scotchApp
    

   var app = angular.module('dcApp');

    // Lockr.flush()
    // configure our routes
    app.config(function($routeSegmentProvider) {

        $routeSegmentProvider
        .when('/',    's0')
        .when('/Registro',    'registro')
        .when('/Login',    'session')        
        .when('/'+'Imbabura/home',    's1.home')
        .when('/'+'Imbabura/Corporativo',    's1.corporativo')
        .when('/'+'Imbabura/Tarifa',    's1.tarifa')
        .when('/'+'Imbabura/Programacion',    's1.programacion')
        .when('/'+'Imbabura/Podcast',    's1.podcast')
        .when('/'+'Imbabura/Noticias',    's1.noticias')
        .when('/'+'Imbabura/Contactos',    's1.contactos')
        .when('/'+'Imbabura/Despertador',    's1.despertador')
        .when('/'+'Imbabura/LaSartenPorElMango',    's1.sarten')
        .when('/'+'Imbabura/Inbox',    's1.inbox')
        .when('/'+'Imbabura/LosHP',    's1.hp')
        .when('/'+'Imbabura/CodigoDeontologico',    's1.codigo')
        .when('/'+'Imbabura/TarifasAsesor/:id',    's1.tarifasasesor')
        
        
        .when('/'+'SantoDomingo',    's2')
        .when('/'+'Esmeraldas',    's3')
        .segment('s1', {
            templateUrl: 'data/imbabura/home.html',
            controller: 'imbaburaCtrl'})            
        .within()
            .segment('home', {
                'default': true,
                templateUrl: 'data/imbabura/inicio.html',
                controller: 'imbahomeCtrl'
            })
                           
        .up()
        .segment('s0', {
            templateUrl: 'data/home/view/index.html',
            // controller: 'homeCtrl'
        })   
        .segment('registro', {
            templateUrl: 'data/registro/view/index.html',
            // controller: 'homeCtrl'
        })
        .segment('session', {
            templateUrl: 'data/session/view/index.html',
           // controller: 'formctrl'
        })
    });

    app.controller('mainController', function($scope, $rootScope, $localStorage){
        $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
            $rootScope.animation = currRoute.animation;
        });
        // $scope.sucursal=datainfo.sucursal[0];
        // console.log($scope.sucursal);
    });


