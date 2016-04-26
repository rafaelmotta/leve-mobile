let directive = () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, $el, attrs, ngModel) => {
      if($el.get(0).type === 'number') {
        ngModel.$parsers.push((value) => {
          if(value) return value.toString();
        });

        ngModel.$formatters.push((value) => {
          if(value) return parseFloat(value, 10);
        });
      }
    }
  }
};


angular.module('utils.foodio').directive('step', directive);