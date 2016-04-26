let directive = ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/delete-button.html'),
    scope: {
      class: '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('deleteButton', directive);