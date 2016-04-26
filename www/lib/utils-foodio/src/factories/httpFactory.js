let httpConfig = function httpConfig($httpProvider) {
  return $httpProvider.interceptors.push("httpHintInterceptor");
};

httpConfig.$inject = ['$httpProvider'];

let httpHintInterceptor = function httpHintInterceptor($q, $window, $rootScope) {
  return {
    request: function request(config) {
      config.timeout = 20000;
      return config || $q.when(config);
    },
    response: function response(_response) {
      return _response || $q.when(_response);
    },
    responseError: function responseError(response) {
      $rootScope.$emit('request:end', {
        error: true
      });
      $rootScope.$emit('request:error', response.data.error);
      return $q.reject(response);
    }
  };
};

httpHintInterceptor.$inject = ['$q', '$window', '$rootScope'];
angular.module("utils.foodio").config(httpConfig).factory("httpHintInterceptor", httpHintInterceptor);

let RestangularInterceptors = (Restangular, $rootScope) => {
  return new class RestangularInterceptors {
    constructor() {
      Restangular.addRequestInterceptor((element) => {
        $rootScope.$emit('request:start');

        $('.with-loader').removeClass('hide');
        $rootScope.withLoader = { inAction: true };

        return element;
      });

      Restangular.addResponseInterceptor((data) => {
        $rootScope.$emit('request:end');

        $('.with-loader').addClass('hide');
        $rootScope.withLoader = { inAction: false };


        return data;
      });
    }
  }
};

RestangularInterceptors.$inject = ['Restangular', '$rootScope'];
angular.module('utils.foodio').factory('RestangularInterceptors', RestangularInterceptors);

