let directive = ($templateCache) => {
  return {
    restrict: 'E',
    require: '^form',
    transclude: true,
    replace: true,
    template: $templateCache.get('/templates/form-group.html'),
    priority: 10000,
    scope: {
      label: '@',
      vertical: '@',
      required: '@'
    },
    link: (scope, $el, attrs) => {
      scope.id = `field-${Math.floor((Math.random() * 50000) + 1)}`;
      $el.find('input, textarea').attr('id', scope.id);
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module("utils.foodio").directive('formGroup', directive);