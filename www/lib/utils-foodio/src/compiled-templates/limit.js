(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/limit.html',
    '<p class="help-block">Restando <strong>{{ maxlength - length }}</strong> caracteres</p>');
}]);
})();
