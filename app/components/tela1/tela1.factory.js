'use strict';

(function() {

  /**
   * @ngdoc function
   * @name avaliacao30App.factory:Tela1Factory
   * @description
   * # Tela1Factory
   * Factory of the avaliacao30App
   */
  var Tela1Factory = function(REQUEST, RequestFactory, $q) {
    var Tela1Factory = {};

    var repoFormatted = function() {
      return [{
        owner: "@radames-rex",
        name: "nvd3js-vhline",
        language: "js",
        stars: "3",
        forks: "1"
      }, {
        owner: "@radames-rex",
        name: "zionmvc",
        language: "php",
        stars: "2",
        forks: "1"
      }, {
        owner: "@radames-rex",
        name: "starbus-api",
        language: "ruby",
        stars: "5",
        forks: "1"
      }];
    }

    Tela1Factory.filterTela1 = function() {
      return repoFormatted();
    }

    Tela1Factory.getTela1 = function(user) {
      var defer = $q.defer();
      RequestFactory.get(REQUEST.github.url + REQUEST.github.users + user + REQUEST.github.repos).then(function(data) {
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

    return Tela1Factory;
  }

  Tela1Factory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('avaliacao30App')
    .factory('Tela1Factory', Tela1Factory);
})();
