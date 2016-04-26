let directive = ($window) => {
  return {
    restrict: 'A',
      link: function ($scope, $element, attrs) {
        var win = angular.element($window);
        var topOffset = $element[0].offsetTop;

        var width = $element.width();
        $element.css('width', width);

        function affixElement() {
          if ($window.pageYOffset > attrs.affixer) {
            $element.css('position', 'fixed');
            $element.css('top', '0px');
          } else {
            $element.css('position', '');
            $element.css('top', '');
          }
        }

        $scope.$on('$routeChangeStart', function() {
          win.unbind('scroll', affixElement);
        });

        win.bind('scroll', affixElement);
      }
  };
};

directive.$inject = ['$window'];
angular.module('utils.foodio').directive('affixed', directive);