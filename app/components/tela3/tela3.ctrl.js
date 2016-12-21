'use strict';

(function() {

  /**
   * @ngdoc function
   * @name avaliacao30App.controller:Tela3Ctrl
   * @description
   * # Tela3Ctrl
   * Controller of the avaliacao30App
   */
  var Tela3Ctrl = function($scope, Tela3Factory) {

    $scope.avaliacoes = [];

    Tela3Factory.getTela3().then(function(data) {
      $scope.avaliacoes = data;
      $scope.$apply();
    });

    $scope.getNumber = function(num) {
      return new Array(num);
    }
  }

  Tela3Ctrl.$inject = ['$scope', 'Tela3Factory'];

  angular
    .module('avaliacao30App')
    .controller('Tela3Ctrl', Tela3Ctrl);
})();
