(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/form-group.html',
    '<div class="form-group" >\n' +
    '  <div ng-if="!vertical">\n' +
    '    <label for="{{ id }}" class="col-sm-4 control-label">{{ label }}\n' +
    '      <span ng-show="required" tooltip="Campo obrigatório" class="required-marker">*</span>\n' +
    '    </label>\n' +
    '    <div class="col-sm-8" ng-transclude></div>\n' +
    '  </div>\n' +
    '  <div ng-if="vertical">\n' +
    '    <label for="{{ id }}" class="control-label">{{ label }}\n' +
    '      <span ng-show="required" tooltip="Campo obrigatório" class="required-marker">*</span>\n' +
    '    </label>\n' +
    '    <div ng-transclude></div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();
