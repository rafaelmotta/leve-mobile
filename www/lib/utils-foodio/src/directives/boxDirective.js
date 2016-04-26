let directive = ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: $templateCache.get('/templates/box.html'),
    scope: {
      title: '@',
      icon: '@',
      containerClass: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('box', directive);