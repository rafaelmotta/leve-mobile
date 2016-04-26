(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/submit-form.html',
    '<div class="form-group form-submit">\n' +
    '  <div class="col-lg-offset-4 col-lg-8">\n' +
    '    <button class="btn btn-success" tabindex="20" loading-spinner>\n' +
    '      {{ text || "Salvar" }}\n' +
    '    </button>\n' +
    '    <div ng-transclude style="display: inline-block;"></div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();
