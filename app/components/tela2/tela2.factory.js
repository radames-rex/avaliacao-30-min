'use strict';

(function() {

  /**
   * @ngdoc function
   * @name avaliacao30App.factory:Tela2Factory
   * @description
   * # Tela2Factory
   * Factory of the avaliacao30App
   */
  var Tela2Factory = function(REQUEST, RequestFactory, $q) {
    var Tela2Factory = {};

    Tela2Factory.postTela2 = function(name,star,coment) {
      var defer = $q.defer(),
        // body = "avaliacao[nome]="+name+"&avaliacao[estrelas]="+star+"&avaliacao[comentario]="+coment;
        body = {
          avaliacao :{
            nome: name,
            estrelas : star,
            comentario : coment
          }
        }
      RequestFactory.post(REQUEST.api.url + REQUEST.api.avaliar, body).then(function(data) {
        console.log(data);
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

    return Tela2Factory;
  }

  Tela2Factory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('avaliacao30App')
    .factory('Tela2Factory', Tela2Factory);
})();
