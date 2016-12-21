'use strict';

(function () {

	/**
   * Definição do Factory para todas as Requisições.
   * @author Rádames Santiago <radames@infoway-pi.com.br>
   * @class RequestFactory
   */
	var RequestFactory = function($rootScope, $http){

		var RequestFactory = {};

		/**
		 * Verifica se o browser do usuário tem conexão com a Internet.
		 * @author Rádames Santiago <radames@infoway-pi.com.br>
		 * @name isOnline
		 * @function
		 * @returns {boolean} Está online ou não.
		 * @memberof RequestFactory
		 */
		var isOnline = function(){
			var onLine = window.navigator.onLine;
			return onLine;
		}

		/**
		 * Monta uma requisição Get.
		 * @author Rádames Santiago <radames@infoway-pi.com.br>
		 * @name get
		 * @function
		 * @param {string} url Url da requisição.
		 * @param {object} data Parâmetros.
		 * @param {boolean} withoutLoader Sem Loader.
		 * @param {boolean} withFilterLoader Com Loader do Filtro.
		 * @returns {object} Promessa da requisição.
		 * @memberof RequestFactory
		 */
		RequestFactory.get = function(url) {
			if(isOnline()){
				return $http.get(url);
			}
		}

    RequestFactory.post = function(url,params) {
      if(isOnline()){
        return $http.post(url,params);
      }
    }

		return RequestFactory;
	}

	RequestFactory.$inject = ['$rootScope', '$http'];

	angular
	.module('avaliacao30App')
	.factory('RequestFactory', RequestFactory);

})();
