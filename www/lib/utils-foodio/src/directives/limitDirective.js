let directive = ($templateCache) => {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/limit.html'),
    replace: true,
    scope: {
      maxlength: '=',
      model: '='
    },
    link: (scope, $el, attrs) => {
      scope.maxlength = parseInt(scope.maxlength, 10);

      if(_.isNaN(scope.maxlength) || !_.isNumber(scope.maxlength)) {
        throw new Error('Valor do atributo maxlength da directiva limit deve ser numeral.');
      }

      // Verifica se o elemento antes da directiva é um input
      let $textarea = $el.prev();
      let type = $textarea.get(0).type;

      if(type !== 'textarea') {
        throw new Error('Elemento antes da directiva limit deve ser um textarea');
      }

      // Adiciona atributo maxlength no HTML para previnir de usuário digitar um valor com mais de 300 carácteres
      $textarea.attr('maxlength', scope.maxlength);

      // Usamos o valor length para lidar com o tamanho de chars do textarea
      scope.length = 0;
      scope.$watch('model', (message) => {
        scope.length = message ? message.length : 0;
      });
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('limit', directive);