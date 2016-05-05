    // create the module and name it scotchApp
    

   

    // Lockr.flush()
    // configure our routes
    app.config(function($routeSegmentProvider) {

        $routeSegmentProvider
        .when('/',    's0')
        .when('/Registro',    'registro')
        .when('/'+'Imbabura',    's1')
        .when('/'+'Imbabura/home',    's1.home')
        
        
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
            .segment('corporativo', {
                // 'default': true,
                templateUrl: 'data/imbabura/corporativo.html',
                // controller: 'imbahomeCtrl'
            })
            .segment('tarifa', {
                // 'default': true,
                templateUrl: 'data/imbabura/tarifa.html',
                // controller: 'imbahomeCtrl'
            })
            .segment('programacion', {
                // 'default': true,
                templateUrl: 'data/imbabura/programacion.html',
                // controller: 'imbahomeCtrl'
            })
            .segment('podcast', {
                // 'default': true,
                templateUrl: 'data/imbabura/podcast.html',
                controller: 'imbapodcastController'
            })
            .segment('noticias', {
                // 'default': true,
                templateUrl: 'data/imbabura/noticias.html',
                // controller: 'imbapodcastController'
            })
            .segment('contactos', {
                // 'default': true,
                templateUrl: 'data/imbabura/contactos.html',
                controller: 'imbacontacController'
            })
            .segment('despertador', {
                // 'default': true,
                templateUrl: 'data/imbabura/despertador.html',
                controller: 'imbadespController'
            })
            .segment('sarten', {
                // 'default': true,
                templateUrl: 'data/imbabura/sarten.html',
                controller: 'imba-sarten-Controller'
            })
            .segment('inbox', {
                // 'default': true,
                templateUrl: 'data/imbabura/inbox.html',
                controller: 'imba-inbox-Controller'
            })
            .segment('hp', {
                // 'default': true,
                templateUrl: 'data/imbabura/hp.html',
                controller: 'imba-hp-Controller'
            })            
            .segment('tarifasasesor', {
                templateUrl: 'data/imbabura/tarifasasesor.html',
                controller: 'imbatarifarioController',
                dependencies: ['id']
            })
            .segment('codigo', {
                templateUrl: 'data/imbabura/codigode.html',
                controller: 'imba-codigodeontologico-Controller',
            })
            
            // .segment('colaboradores', {
            //     templateUrl: 'data/imbaburaCtrl/oyem.html',
            //     controller: 'colaboradoresCtrl',
            //     // dependencies: ['id']
            // }).segment('fotos', {
            //     templateUrl: 'data/imbaburaCtrl/fotos.html',
            //     // controller: 'Section1ItemCtrl',
            //     // dependencies: ['id']
            // })              
            // .within()
            //     .segment('tab1', {
            //         'default': true,
            //         templateUrl: 'templates/section1/tabs/tab1.html'})                    
            //     .segment('tab2', {
            //         templateUrl: 'templates/section1/tabs/tab2.html'})                
            // .up()                
            // .segment('prefs', {
            //     templateUrl: 'templates/section1/prefs.html'})                
        .up()
        .segment('registro', {
            templateUrl: 'data/registro/view/index.html',
            // controller: 'homeCtrl'
        })   
        .segment('registroas', {
            templateUrl: 'data/imbabura/home.html',
            controller: 'homeCtrl'
        })
        .segment('s3', {
            templateUrl: 'data/imbabura/home.html',
            controller: 'homeCtrl'
        })
    });

    app.controller('mainController', function($scope, $rootScope, $localStorage){
        $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
            $rootScope.animation = currRoute.animation;
        });
        // $scope.sucursal=datainfo.sucursal[0];
        // console.log($scope.sucursal);
    });


