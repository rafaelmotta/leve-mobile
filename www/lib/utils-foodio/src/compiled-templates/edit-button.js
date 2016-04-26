(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/edit-button.html',
    '<button class="btn btn-warning btn-xs">\n' +
    '  <i class="fa fa-{{ icon || \'pencil\' }}"></i>\n' +
    '</button>');
}]);
})();
