let directive = ($templateCache, $interval) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/tik-tak.html'),
    scope: {
      interval: '@',
      value: '=',
      operator: '@'
    },
    link: (scope, $el, attrs) => {
      let operator = (scope.operator && (scope.operator == '+' || scope.operator == '-')) ? scope.operator : '-';

      let operation = {
        '+': (a,b) => {
          return parseFloat(a) + parseFloat(b);
        } ,
        '-': (a,b) => {
          return parseFloat(a) - parseFloat(b);
        }
      };

      $interval(() => {
        scope.value = operation[operator](scope.value, 1);
      }, scope.interval);
    }
  };
};

directive.$inject = ['$templateCache', '$interval'];
angular.module('utils.foodio').directive('tikTak', directive);