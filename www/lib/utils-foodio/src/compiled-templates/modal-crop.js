(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-crop.html',
    '<div class="modal-header">\n' +
    '  <button type="button" class="close" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' +
    '  <h4 class="modal-title">Recorte a imagem</h4>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <img ng-src="{{ imgToCrop }}" ng-cropper ng-cropper-options="options" alt="Imagem a ser recortada" ng-cropper-show="showEvent" />\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-primary" ng-click="ctrl.crop()" loading-spinner>Salvar</button>\n' +
    '</div>');
}]);
})();
