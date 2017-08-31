angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('side-menu21', {
    url: '/side-menu21',
    templateUrl: 'templates/side-menu21.html',
    controller: 'side-menu21Ctrl'
  })

  .state('cADASTRO', {
    url: '/page2',
    templateUrl: 'templates/cadastro.html',
    controller: 'cADASTROCtrl'
  })

  .state('menuUser', {
    url: '/page3',
    templateUrl: 'templates/menuUser.html',
    controller: 'menuUserCtrl'
  })

  .state('cONSULTA', {
    url: '/page5',
    templateUrl: 'templates/cONSULTA.html',
    controller: 'cONSULTACtrl'
  })

  .state('cadastrarDispositivo', {
    url: '/page4',
    templateUrl: 'templates/cadastrarDispositivo.html',
    controller: 'cadastrarDispositivoCtrl'
  })

  .state('login', {
    url: '/page11',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});