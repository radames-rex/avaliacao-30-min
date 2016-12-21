'use strict';

(function() {

  /**
   * @ngdoc function
   * @name avaliacao30App.controller:Tela2Ctrl
   * @description
   * # Tela2Ctrl
   * Controller of the avaliacao30App
   */
  var Tela2Ctrl = function($scope, Tela2Factory, $state) {

    $scope.avalie = function(){
      Tela2Factory.postTela2($scope.name,$scope.star,$scope.coment).then(function(){
        $state.transitionTo('main.tela3');
      });
    };

  }

  Tela2Ctrl.$inject = ['$scope', 'Tela2Factory', '$state'];

  angular
    .module('avaliacao30App')
    .controller('Tela2Ctrl', Tela2Ctrl);
})();
