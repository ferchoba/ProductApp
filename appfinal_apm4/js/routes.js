angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.listaDeProductos', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaDeProductos.html',
        controller: 'listaDeProductosCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('inicio', {
    url: '/page4',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('registro', {
    url: '/page6',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

  .state('okregistro', {
    url: '/page7',
    templateUrl: 'templates/okregistro.html',
    controller: 'okregistroCtrl'
  })

  .state('menu.detalleProducto', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalleProducto.html',
        controller: 'detalleProductoCtrl'
      }
    }
  })

  .state('menu.modificarProducto', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/modificarProducto.html',
        controller: 'modificarProductoCtrl'
      }
    }
  })

  .state('menu.crearProducto', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crearProducto.html',
        controller: 'crearProductoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page4')

  

});