(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/no-results.html',
    '<div class="row no-results">\n' +
    '  <div ng-class="{ \'col-md-4\': icon, \'hide\': !icon }">\n' +
    '    <i ng-hide="!icon" class="fa fa-{{ icon }}"></i>\n' +
    '  </div>\n' +
    '  <div ng-class="{ \'col-md-8\': icon, \'col-md-12\': !icon }">\n' +
    '    <p>{{ text }}</p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
