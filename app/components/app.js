'use strict';

/**
 * @ngdoc overview
 * @name avaliacao30App
 * @description
 * # avaliacao30App
 *
 * Main module of the application.
 */
angular
  .module('avaliacao30App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngMaterial'
  ])
  .constant('PATH', {
    main: '/myrepo',
    tela1: '/tela1',
    tela2: '/tela2',
    tela3: '/tela3'
  })
  .constant('REQUEST', {
    api: {
      url: 'https://avaliacao-30-minutos.herokuapp.com',
      url2: 'http://10.0.1.79:3000',
      avaliacoes: '/avaliacoes.json',
      avaliar: '/avaliar.json'
    }
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH) {

    /* Configuração do provider de universalização e da linguagem padrão. */
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('pt');

    /* Configuração dos estados e rotas da aplicação */
    $stateProvider.state('main', {
      abstract: true,
      url: PATH.main,
      templateUrl: 'views/main.html'
    }).state('main.tela1', {
      url: PATH.tela1,
      templateUrl: 'views/tela1.html',
      controller: 'Tela1Ctrl as ctrl'
    }).state('main.tela2', {
      url: PATH.tela2,
      templateUrl: 'views/tela2.html',
      controller: 'Tela2Ctrl as ctrl'
    }).state('main.tela3', {
      url: PATH.tela3,
      templateUrl: 'views/tela3.html',
      controller: 'Tela3Ctrl as ctrl'
    });

    $urlRouterProvider.otherwise(function() {
      return '/myrepo/tela1';
    });

  });
