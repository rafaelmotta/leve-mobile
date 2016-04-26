(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/delete-button.html',
    '<button class="{{ class || \'btn btn-default btn-xs\' }}">\n' +
    '  <i class="fa fa-{{ icon || \'trash-o\' }}"></i>\n' +
    '</button>');
}]);
})();
