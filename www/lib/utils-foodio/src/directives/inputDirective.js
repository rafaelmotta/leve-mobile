let directive = () => {
  return {
    restrict: 'E',
    link: (scope, $el, attrs) => {
      let el = $el[0];

      if(el.type !== 'radio' && el.type !== 'checkbox' ) {
        el.classList.add('form-control');
      }
    }
  };
};

angular.module('utils.foodio').directive('input', directive);