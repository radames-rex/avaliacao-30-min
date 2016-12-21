'use strict';

(function() {

  /**
   * @ngdoc function
   * @name avaliacao30App.factory:Tela3Factory
   * @description
   * # Tela3Factory
   * Factory of the avaliacao30App
   */
  var Tela3Factory = function(REQUEST, RequestFactory, $q) {
    var Tela3Factory = {};

    Tela3Factory.getTela3 = function() {
      var defer = $q.defer();
      RequestFactory.get(REQUEST.api.url + REQUEST.api.avaliacoes).then(function(data) {
        data = data.data;
        if (typeof data === 'object') {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    }

    return Tela3Factory;
  }

  Tela3Factory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('avaliacao30App')
    .factory('Tela3Factory', Tela3Factory);
})();
