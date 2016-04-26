let factory = ($rootScope, $state, hint) => {

  return class RequestError {

    constructor(params = {}) {
      if(params.onError && angular.isFunction(params.onError)) {
        this.onError = params.onError
      }

      $rootScope.$on('request:error', ($event, data) => { this._onError(data); });
    }

    // Exibe mensagem
    // @param {Object} data com descrição do erro
    _onError(data) {
      if(typeof data === 'undefined') {
        return false;
      }

      if(data.code === 0) {
        data = { code: 408, description: 'Não foi possível conectar com o servidor. Tente mais tarde. '}
      }

      if(angular.isArray(data.description)) {
        angular.forEach(data.description, (message) => {
          hint.error(message);
        });
      } else {
        hint.error(data.description);
      }

      if(this.onError) {
        this.onError(data);
      }
    }
  }
};

factory.$inject = ['$rootScope', '$state', 'hint'];
angular.module('utils.foodio').factory('RequestError', factory);