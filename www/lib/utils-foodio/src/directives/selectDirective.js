let directive = () => {
  return {
    restrict: 'E',
    link: (scope, $el, attrs) => {
      $el[0].classList.add('form-control');
    }
  };
};

angular.module('utils.foodio').directive('select', directive);