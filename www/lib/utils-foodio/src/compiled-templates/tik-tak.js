(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/tik-tak.html',
    '<span>\n' +
    '  {{ value }}\n' +
    '</span>');
}]);
})();
