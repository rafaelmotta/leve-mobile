(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-message.html',
    '<div class="modal-header">\n' +
    '  <h4>{{ message.title }}</h4>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <div class="alert alert-info">\n' +
    '    {{ message.content }}\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-default" ng-click="ctrl.close();">\n' +
    '    Fechar\n' +
    '  </button>\n' +
    '</div>');
}]);
})();
