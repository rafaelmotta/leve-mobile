(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/back-button.html',
    '<a href="javascript:history.back()" class="btn btn-default">Voltar</a>');
}]);
})();
