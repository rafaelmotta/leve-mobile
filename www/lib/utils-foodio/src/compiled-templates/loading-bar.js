(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/loading-bar.html',
    '<div class="loading-bar">\n' +
    '  <i class="fa fa-refresh fa-spin"></i>\n' +
    '</div>');
}]);
})();
