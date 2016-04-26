let directive = () => {
  return {
    restrict: 'E',
    link: (scope, $el, attrs) => {
      $el.append('<input type="text" style="display:none" />')
         .append('<input type="password" style="display:none" />');
    }
  };
};

angular.module('utils.foodio').directive('form', directive);