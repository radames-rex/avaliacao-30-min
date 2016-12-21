'use strict';

(function() {

  /**
   * @ngdoc function
   * @name avaliacao30App.controller:Tela1Ctrl
   * @description
   * # Tela1Ctrl
   * Controller of the avaliacao30App
   */
  var Tela1Ctrl = function($scope, $state, Tela1Factory) {

    $scope.start = function(){
      $state.transitionTo('main.tela2');
    }

  }

  Tela1Ctrl.$inject = ['$scope', '$state', 'Tela1Factory'];

  angular
    .module('avaliacao30App')
    .controller('Tela1Ctrl', Tela1Ctrl);
})();
