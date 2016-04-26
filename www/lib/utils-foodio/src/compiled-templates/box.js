(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/box.html',
    '<div class="box-container">\n' +
    '  <div class="box-header" ng-hide="hideHeader">\n' +
    '    <h2>\n' +
    '      <i class="fa fa-{{ icon }}" ng-hide="!icon"></i>\n' +
    '      {{ title }}\n' +
    '    </h2>\n' +
    '  </div>\n' +
    '  <div ng-transclude class="box-content {{ sizeClass }} {{ hideHeader ? \'box-hide-header\' : \'\' }}">\n' +
    '  </div>\n' +
    '</div>');
}]);
})();
