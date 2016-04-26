let directive = () => {
  return {
    restrict: 'E',
    link: (scope, $el, attrs) => {
      $el.addClass("table table-hover table-striped").wrap("<div class='table-responsive'></div>");
    }
  };
};

angular.module('utils.foodio').directive('table', directive);


