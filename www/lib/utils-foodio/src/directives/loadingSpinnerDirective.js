let directive = ($compile) => {
  return {
    restrict: 'A',
    link: (scope, $el, attrs) => {
      attrs.$set('ngDisabled', 'withLoader.inAction');
      $el.prepend('<i class="fa fa-circle-o-notch fa-spin with-loader hide"></i> ');

      $el.removeAttr('loading-spinner');

      $compile($el)(scope);
    }
  };
};

directive.$inject = ['$compile'];
angular.module('utils.foodio').directive('loadingSpinner', directive);